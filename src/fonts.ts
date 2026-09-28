import localFont from 'next/font/local';

export const aptos = localFont({
  src: [
    { path: './assets/fonts/aptos/Aptos.ttf', weight: '400', style: 'normal' },
    { path: './assets/fonts/aptos/Aptos-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './assets/fonts/aptos/Aptos-Bold.ttf', weight: '700', style: 'normal' },
    { path: './assets/fonts/aptos/Aptos-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-aptos',
  fallback: ['Segoe UI', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
});
