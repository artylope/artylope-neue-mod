import './globals.scss';

export const metadata = {
  title: 'Artylope',
  description: 'Design a better world by Ang Yi Xin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col grow">{children}</body>
    </html>
  );
}
