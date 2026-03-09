export default function ArcBoxLogo(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="16 16 480 480" {...props}>
      <defs>
        <linearGradient id="c" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffc89a" />
          <stop offset="20%" stopColor="#ff8c4a" />
          <stop offset="45%" stopColor="#e86518" />
          <stop offset="75%" stopColor="#c04a0c" />
          <stop offset="100%" stopColor="#8a3000" />
        </linearGradient>
        <linearGradient id="d" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity={0.7} />
          <stop offset="40%" stopColor="#fff" stopOpacity={0.1} />
          <stop offset="100%" stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter id="e" width="140%" height="140%" x="-20%" y="-20%">
          <feGaussianBlur stdDeviation={3} />
        </filter>
        <filter id="b" width="200%" height="200%" x="-50%" y="-50%">
          <feGaussianBlur stdDeviation={15} />
        </filter>
        <radialGradient id="a" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#fff0e8" />
          <stop offset="100%" stopColor="#fddaca" />
        </radialGradient>
      </defs>
      <rect
        width={480}
        height={480}
        x={16}
        y={16}
        fill="url(#a)"
        rx={96}
        ry={96}
      />
      <ellipse
        cx={170}
        cy={140}
        fill="#fff"
        filter="url(#b)"
        opacity={0.3}
        rx={140}
        ry={90}
      />
      <path
        fill="none"
        stroke="#a04010"
        strokeLinecap="round"
        strokeWidth={55}
        d="M78 335q178-260 356 0"
        filter="url(#b)"
        opacity={0.15}
      />
      <path
        fill="none"
        stroke="url(#c)"
        strokeLinecap="round"
        strokeWidth={54}
        d="M75 320q181-265 362 0"
      />
      <path
        fill="none"
        stroke="url(#d)"
        strokeLinecap="round"
        strokeWidth={40}
        d="M80 315q176-257 352 0"
        filter="url(#e)"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={6}
        d="M110 300q146-215 292 0"
        filter="url(#e)"
        opacity={0.7}
      />
    </svg>
  );
}
