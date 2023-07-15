import './globals.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Artylope',
  description: 'Design a better world by Ang Yi Xin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col grow">
        <Header />
        <main className="flex grow bg-indigo-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
