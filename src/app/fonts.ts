import localFont from 'next/font/local';

export const akkurat = localFont({
  src: [
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratLLTrialWeb-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-akkurat',
  display: 'swap',
});

export const akkuratMono = localFont({
  src: [
    {
      path: '../../public/fonts/AkkuratMonoLLTrialWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratMonoLLTrialWeb-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AkkuratMonoLLTrialWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AkkuratMonoLLTrialWeb-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-akkurat-mono',
  display: 'swap',
});
