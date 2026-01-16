import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsappButton from '@/components/layout/whatsapp-button';
import ScrollToTopButton from '@/components/layout/scroll-to-top-button';

export const metadata: Metadata = {
  title: 'JCC Career Consultancy: Chart Your Course to Career Excellence',
  description: 'Forge your path to success with JCC Career Consultancy. We provide elite career coaching, resume mastery, and interview preparation to unlock your professional potential.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsappButton phoneNumber="+916232586854" />
          <ScrollToTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
