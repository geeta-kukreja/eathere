import { Geist, Geist_Mono } from "next/font/google";
import { Fredoka } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({ subsets: ['latin'] });

export const metadata = {
  title: "EatHere - Discover Great Food",
  description: "Plan your next meal and discover the best restaurants in your city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
