import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import TopNav from '@/components/shared/top-nav';
import { LazyWhatsAppIcon } from '@/components/whatsapp-icon';
import { seo } from '@/constants';
import '@/styles/style.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  applicationName: 'Ascent Wealth App',
  authors: [{ name: 'Abhijit K.', url: 'https://abhijitdev.tech' }],
  generator: 'Next.js',
  referrer: 'origin',
  creator: 'Abhijit K.',
  publisher: 'Ascent Wealth',
  metadataBase: new URL('https://wealth-mgmt-next.netlify.app'),
  openGraph: {
    determiner: 'the',
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ascent Wealth',
      },
    ],
    phoneNumbers: ['+917305953668'],
    emails: ['ascentwealth.invest@gmail.com'],
    siteName: 'Ascent Wealth',
    locale: 'en_US',
    alternateLocale: ['en-IN', 'hi-IN'],
    type: 'website',
    videos: ['https://www.youtube.com/embed/RKicpV2qvZU'],
    url: 'https://wealth-mgmt-next.netlify.app',
    countryName: 'India',
    ttl: 86400,
  },
  abstract:
    'Ascent Wealth - Your Trusted Partner in Financial Growth and Investment Solutions.',
  category: 'Finance',
  classification: 'Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-black overflow-x-hidden`}>
        <header id='header' className={'style-six'}>
          <TopNav />
          <Navbar />
        </header>
        {children}
        <Footer />
        <LazyWhatsAppIcon />
      </body>
    </html>
  );
}
