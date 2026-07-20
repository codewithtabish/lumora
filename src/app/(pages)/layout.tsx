import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/(app)/(common)/(theme)/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "development"
      ? new URL("http://localhost:3000")
      : new URL("https://lumora-eosin-eight.vercel.app"),
  title: {
    default: "Lumora",
    template: "%s | Lumora",
  },

  description:
    "Stream thousands of audiobooks, stories, and podcasts with a beautiful listening experience.",

  applicationName: "Lumora",

  authors: [
    {
      name: "CodeWithTabish",
    },
  ],

  creator: "CodeWithTabish",

  publisher: "CodeWithTabish",

  generator: "Next.js",

  keywords: [
    "Lumora",
    "Audiobooks",
    "Audio Books",
    "Stories",
    "Podcasts",
    "Streaming",
    "Audio Streaming",
    "Books",
    "Listening",
    "Entertainment",
  ],

  category: "Entertainment",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "//apple-icon.png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  appleWebApp: {
    capable: true,
    title: "Lumora",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lumora",
    title: "Lumora",
    description:
      "Listen to audiobooks, stories, and podcasts with an immersive streaming experience.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lumora",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumora",
    description: "Stream audiobooks, stories, and podcasts anytime, anywhere.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// https://www.pwabuilder.com/imageGenerator
