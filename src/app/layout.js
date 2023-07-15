import './globals.scss';
import Providers from './providers';
import DarkModeSwitch from '@/components/DarkModeSwitch';

export const metadata = {
  title: 'Artylope',
  description: 'Design a better world by Ang Yi Xin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col grow">
        <Providers>
          <DarkModeSwitch />
          {children}
        </Providers>
      </body>
    </html>
  );
}
