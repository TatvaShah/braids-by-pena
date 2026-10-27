import type { SiteConfig } from "@/lib/types";

const ig = "https://www.instagram.com/braidsbypena/";

export const site: SiteConfig = {
  name: "Braids By Pena",
  tagline: "Knotless and boho braids for kids and adults in Brampton and Mississauga.",
  category: "Braider",
  schemaType: "HairSalon",
  area: "Brampton / Mississauga, ON",
  siteUrl: "https://braids-by-pena.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8a5a2b" },
  },
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton and Mississauga braider",
    headline: "Beautiful braids, done with love",
    subhead: "Knotless and boho braids for kids and adults. Open Monday to Saturday. Send a DM to book your appointment.",
    images: [
      { src: "/images/post-4.jpg", alt: "Long boho braids by Braids By Pena" },
      { src: "/images/post-8.jpg", alt: "Large knotless braids" },
      { src: "/images/post-3.jpg", alt: "Boho braids for fall" },
    ],
    secondaryCta: { label: "See the braids", href: "#gallery" },
  },

  highlights: ["Knotless and boho braids", "Kids and adults", "Open Monday to Saturday", "Book by DM"],

  about: {
    title: "I love what I do",
    body: [
      "Braids By Pena is a braider serving Brampton and Mississauga, creating knotless braids, boho braids, and protective styles for kids and adults.",
      "I love what I do and I do what I love. Send me a DM with the style you have in mind and we will find a time that works for you.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Finished braids by Braids By Pena" },
  },

  menu: {
    label: "Services",
    title: "Braiding services",
    variant: "list",
    showPrices: false,
    priceNote: "Message me for pricing on your style and length.",
    groups: [
      {
        title: "Braids",
        note: "Price on consultation",
        items: [
          { name: "Knotless braids", description: "Small to large sizes, at the length you choose." },
          { name: "Boho braids", description: "Knotless braids with soft curly pieces for a boho look." },
          { name: "Kids braids", description: "Neat, comfortable styles for little ones." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent braids",
    items: [
      { src: "/images/post-4.jpg", width: 360, height: 640, alt: "Large knotless braids", caption: "Large knotless braids", href: "https://www.instagram.com/braidsbypena/reel/C_pJDgEs0pX/" },
      { src: "/images/post-3.jpg", width: 360, height: 640, alt: "Boho braids", caption: "Boho braids for fall", href: "https://www.instagram.com/braidsbypena/reel/DBWhDc0Rvh-/" },
      { src: "/images/post-7.jpg", width: 361, height: 640, alt: "Large knotless braids", caption: "Large knotless braids", href: "https://www.instagram.com/braidsbypena/reel/DTp-VxTDQLE/" },
      { src: "/images/post-6.jpg", width: 360, height: 640, alt: "Knotless braids", caption: "Knotless braids", href: "https://www.instagram.com/braidsbypena/reel/C7bwqGhsD-X/" },
      { src: "/images/post-5.jpg", width: 320, height: 569, alt: "Boho braids", caption: "Boho braids", href: "https://www.instagram.com/braidsbypena/reel/DJSLZ-XRfXD/" },
      { src: "/images/post-8.jpg", width: 360, height: 640, alt: "Boho braids", caption: "Boho braids lovers", href: "https://www.instagram.com/braidsbypena/reel/C8Df1_bshOL/" },
      { src: "/images/post-2.jpg", width: 360, height: 640, alt: "Braids", caption: "Fresh braids", href: "https://www.instagram.com/braidsbypena/reel/DBGqwYvRF8-/" },
      { src: "/images/post-1.jpg", width: 360, height: 640, alt: "Braids", caption: "Long braids", href: "https://www.instagram.com/braidsbypena/reel/C-_Lw8zxTpg/" },
    ],
  },

  instagram: { handle: "braidsbypena" },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Appointments are booked by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Braids By Pena! I would like to book an appointment.\nStyle (knotless, boho, other):\nSize and length:\nFor a kid or adult:\nPreferred date:",
    links: [],
    note: "A $30 non-refundable deposit secures your appointment. Open Monday to Saturday; closed Sundays and holidays.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with your style, size, and preferred date. A $30 non-refundable deposit secures your spot." },
    { q: "Do you braid kids' hair?", a: "Yes, I braid for both kids and adults." },
    { q: "When are you open?", a: "Monday to Saturday. Closed Sundays and holidays." },
    { q: "Where are you located?", a: "I serve clients in Brampton and Mississauga, Ontario." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton and Mississauga, Ontario",
    socials: [{ label: "Instagram @braidsbypena", href: ig }],
  },

  seo: {
    title: "Braids By Pena | Braider in Brampton and Mississauga",
    description: "Knotless and boho braids for kids and adults in Brampton and Mississauga. Open Monday to Saturday. DM on Instagram to book your appointment.",
    keywords: ["knotless braids Brampton", "boho braids Mississauga", "braider Brampton", "kids braids Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
