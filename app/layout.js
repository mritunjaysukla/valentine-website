import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Valentine's Day Surprise",
  description: "A special Valentine's Day page for someone special ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-pink-50 to-red-50`}
      >
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          {/* Header */}
          <header className="w-full max-w-4xl text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-600 animate-fade-in">
              💖 Valentine's Day 💖
            </h1>
            <p className="mt-4 text-lg text-pink-500 animate-fade-in delay-100">
              A little surprise for someone special...
            </p>
          </header>

          {/* Main Content */}
          <main className="w-full max-w-4xl flex-1 flex items-center justify-center p-6 bg-white rounded-lg shadow-xl border border-pink-100 animate-fade-in delay-200">
            <div className="w-full h-full flex items-center justify-center">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full max-w-4xl text-center mt-12">
            <p className="text-sm text-pink-400 animate-fade-in delay-300">
              Made with ❤️ by Mritunjay Sukla
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
