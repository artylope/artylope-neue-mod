import './globals.scss';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Artylope',
  description: 'Design a better world by Ang Yi Xin',
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col grow`}>
        <Providers>
          <Header />
          <main className="flex flex-col grow">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
