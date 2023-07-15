import './globals.scss';
import Providers from './providers';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
