import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: "Lumora",
    short_name: "Lumora",

    description:
      "Stream thousands of audiobooks, stories, and podcasts with a beautiful listening experience. Discover inspiring content and enjoy seamless audio streaming wherever you are.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    orientation: "portrait",

    background_color: "#020817",

    theme_color: "#020817",

    lang: "en",

    dir: "ltr",

    categories: ["books", "entertainment", "education", "music", "lifestyle"],

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/maskable-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/maskable-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],

    screenshots: [
      {
        src: "/screenshots/home.jpg",
        sizes: "1080x2400",
        type: "image/png",
        form_factor: "narrow",
        label: "Discover audiobooks, stories and podcasts",
      },
      {
        src: "/screenshots/player.jpg",
        sizes: "1080x2400",
        type: "image/png",
        form_factor: "narrow",
        label: "Modern audio player",
      },
      {
        src: "/screenshots/library.jpg",
        sizes: "1080x2400",
        type: "image/png",
        form_factor: "narrow",
        label: "Your personal library",
      },
    ],

    shortcuts: [
      {
        name: "Discover",
        short_name: "Discover",
        description: "Browse trending audiobooks and podcasts",
        url: "/discover",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Library",
        short_name: "Library",
        description: "Open your saved content",
        url: "/library",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Continue Listening",
        short_name: "Continue",
        description: "Resume your last audiobook or podcast",
        url: "/continue",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Search",
        short_name: "Search",
        description: "Search books, stories and podcasts",
        url: "/search",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
          },
        ],
      },
    ],

    prefer_related_applications: false,
  };
}
