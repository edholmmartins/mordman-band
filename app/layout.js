export const metadata = {
  title: 'Your Band — Official Site',
  description: 'LOUD. RAW. ALIVE.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
