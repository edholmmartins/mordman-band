export const metadata = {
  title: 'Mordman Band — Official Site',
  description: 'HÖGT. RÅTT. KUKA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
