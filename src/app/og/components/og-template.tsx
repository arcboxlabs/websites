import ArcBoxLogo from '@/components/arcbox-logo';

interface OGImageProps {
  title: string,
  description?: string,
  url?: string,
  siteName?: string,
  section?: 'blog' | 'docs'
}

const SECTION_LABELS: Record<string, string> = { blog: 'Blog', docs: 'Docs' };

// Generate dot positions arranged in a full semicircle arc (180°).
// The arch center sits below-right of the canvas so:
//   - the smaller rings form complete, readable mini-arches in the right portion
//   - the larger rings extend partially off-canvas on both sides, adding depth
// An x-floor of 560 clips any dots that bleed into the text area on the left.
function generateArcDots(): Array<{ x: number, y: number, op: number }> {
  const W = 1200;
  const H = 630;

  // Center is pushed far right (partially off-canvas) so the arch is only visible
  // on its LEFT side: the left leg enters from the bottom, the peak is in the
  // right portion, and the right leg exits off the right edge — showing roughly
  // the left two-thirds of the half-circle, cropping the right third.
  const cx = 1120;
  const cy = 760;

  const RINGS = 12;
  const R_MIN = 300;
  const R_MAX = 600;
  const DOT_SPACING = 26;
  const A_START = Math.PI;
  const A_END = 2 * Math.PI;

  const dots: Array<{ x: number, y: number, op: number }> = [];

  for (let ring = 0; ring < RINGS; ring++) {
    const r = R_MIN + ((R_MAX - R_MIN) * ring) / (RINGS - 1);
    const arcLength = r * Math.PI;
    const dotCount = Math.max(6, Math.round(arcLength / DOT_SPACING));

    const ringPhase = ring / (RINGS - 1);
    const baseOp = 0.08 + 0.34 * Math.sin(ringPhase * Math.PI);

    for (let d = 0; d <= dotCount; d++) {
      const t = d / dotCount;
      const angle = A_START + t * (A_END - A_START);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      if (x >= 0 && x <= W && y >= 0 && y <= H) {
        dots.push({ x: Math.round(x), y: Math.round(y), op: baseOp });
      }
    }
  }

  return dots;
}

const DOTS = generateArcDots();

export function OGImage({
  title,
  description,
  url,
  siteName = 'ArcBox',
  section
}: OGImageProps) {
  const titleSize =
    title.length > 50
      ? 48
      : title.length > 38
        ? 56
        : title.length > 26
          ? 64
          : 72;

  const displayUrl = url ? url.replace(/^https?:\/\//, '').toUpperCase() : undefined;
  const sectionLabel = section ? SECTION_LABELS[section] : undefined;

  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: 'flex',
        background: '#0d0d0d',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Warm ambient glow centred on the dot arc peak — right portion only */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 700,
          background:
            'radial-gradient(ellipse 480px 380px at 80% 108%, rgba(210, 85, 18, 0.20) 0%, rgba(180, 60, 10, 0.06) 45%, transparent 70%)',
          display: 'flex'
        }}
      />

      {/* Dot texture — full 180° semicircle arch, echoing the ArcBox rainbow logo */}
      {DOTS.map((dot) => (
        <div
          key={`dot-${dot.x}-${dot.y}`}
          style={{
            position: 'absolute',
            left: dot.x - 2,
            top: dot.y - 2,
            width: 4,
            height: 4,
            borderRadius: 2,
            background: `rgba(220, 105, 30, ${dot.op.toFixed(3)})`,
            display: 'flex'
          }}
        />
      ))}

      {/* Content layer */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 72px',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* ── Top: Logo + Site name + Section label ── */}
        {/*
          Single flat flex row — no nested containers.
          gap: 12px gives uniform spacing between every item.
          SVG separator avoids the Satori div-alignment quirks.
        */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: 48, height: 48, display: 'flex', flexShrink: 0 }}>
            <ArcBoxLogo width={48} height={48} />
          </div>

          <span
            style={{
              color: 'rgba(255, 255, 255, 0.96)',
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '-0.3px'
            }}
          >
            {siteName}
          </span>

          {sectionLabel && (
            <svg width="2" height="20" viewBox="0 0 2 20">
              <rect width="2" height="20" fill="rgba(255,255,255,0.25)" />
            </svg>
          )}
          {sectionLabel && (
            <span
              style={{
                color: '#e86518',
                fontSize: '28px',
                fontWeight: '600'
              }}
            >
              {sectionLabel}
            </span>
          )}
        </div>

        {/* ── Middle: Title + Description ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: '10px'
          }}
        >
          {/* Thin orange accent bar above the title */}
          <div
            style={{
              width: 48,
              height: 3,
              background: '#e86518',
              borderRadius: 2,
              marginBottom: 28,
              display: 'flex'
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '780px'
            }}
          >
            <div
              style={{
                color: '#ffffff',
                fontSize: titleSize,
                fontWeight: '800',
                lineHeight: 1.08,
                letterSpacing: '-1.5px',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {title}
            </div>

            {description && (
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.58)',
                  fontSize: '26px',
                  lineHeight: 1.45,
                  display: 'flex',
                  flexWrap: 'wrap',
                  maxWidth: '720px'
                }}
              >
                {description}
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom: URL ── */}
        {displayUrl && (
          <div style={{ display: 'flex', marginTop: '36px' }}>
            <span
              style={{
                color: 'rgba(232, 101, 24, 0.9)',
                fontSize: '16px',
                fontWeight: '800',
                letterSpacing: '1px'
              }}
            >
              {displayUrl}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
