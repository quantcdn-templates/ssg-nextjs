import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on QuantCDN',
  description: 'A Next.js static site deployed on QuantCDN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
