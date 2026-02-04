import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 lg:ml-64">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
