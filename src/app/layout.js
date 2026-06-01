import './globals.css';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Bandama St-Laurent International Trading',
  description:
    'Bandama St-Laurent International Trading — Global Trade and Consulting between North America and West Africa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
