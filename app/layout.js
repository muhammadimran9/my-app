import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Imran - Full Stack Developer",
  description: "Full-Stack Web & Mobile App Developer specializing in MERN stack, Next.js, and modern UI/UX with Tailwind CSS",
  keywords: "Full Stack Developer, MERN Stack, Next.js, React, Node.js, MongoDB, JavaScript, TypeScript, Mobile App Developer",
  authors: [{ name: "Muhammad Imran" }],
  creator: "Muhammad Imran",
  publisher: "Muhammad Imran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/profile-pic.jpeg",
    apple: "/images/profile-pic.jpeg",
  },
  manifest: "/manifest.json",
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Imran Portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imrandigitals.online",
    title: "Muhammad Imran - Full Stack Developer",
    description: "Full-Stack Web & Mobile App Developer specializing in MERN stack, Next.js, and modern UI/UX",
    siteName: "Muhammad Imran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Imran - Full Stack Developer",
    description: "Full-Stack Web & Mobile App Developer specializing in MERN stack, Next.js, and modern UI/UX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Imran Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Imran Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="apple-touch-icon" href="/images/profile-pic.jpeg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      >
        <ThemeProvider>
          <AuthProvider>
            <div className="layout-container" style={{ background: 'var(--background)' }}>
              <Header />
              <main className="main-content">
                {children}
              </main>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
