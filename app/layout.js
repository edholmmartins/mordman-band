import { Oswald, Roboto_Condensed } from 'next/font/google';

export const oswald = Oswald({
  subsets: ['latin'],           // includes ÅÄÖ
  weight: ['400','500','600','700'],
  display: 'swap',
  variable: '--font-oswald'
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300','400','700'],
  display: 'swap',
  variable: '--font-roboto-condensed'
});

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={`${oswald.variable} ${robotoCondensed.variable}`}>
      <body className="font-body bg-black text-white">{children}</body>
    </html>
  );
}


export const metadata = {
  title: 'Mordman band',
  description: 'Officiell hemsida för Mordman band.',
  icons: {
    icon: '/content/logo_head.png',
  },
};
