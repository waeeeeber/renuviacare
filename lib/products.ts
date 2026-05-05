export type Variant = {
  id: string;
  name: string;
  swatch: string;
};

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  compareAt?: number;
  currency: "CHF";
  shortDescription: string;
  description: string[];
  features: { title: string; body: string; icon: string }[];
  highlights: string[];
  images: { src: string; alt: string }[];
  variants: Variant[];
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "silktouch",
    name: "Renuvia SilkTouch™",
    subtitle: "Antibakterielles Peeling-Duschtuch",
    price: 44.95,
    compareAt: 49.95,
    currency: "CHF",
    badge: "Bestseller",
    shortDescription:
      "Verwandle deine Dusche in eine Spa-Routine. Sanft wirksames Peeling, hygienisch dank Silberionen, in 15 Minuten trocken.",
    description: [
      "Das SilkTouch™ Duschtuch ist mit feinen Silberionen veredelt und kombiniert ein sanftes Peeling mit hygienischer Schnelltrocknung.",
      "Die ergonomisch verlängerte Form erreicht mühelos jeden Bereich des Rückens – für gepflegte Haut von Kopf bis Fuss.",
      "Gefertigt aus hautfreundlichen Mikrofasern, dermatologisch empfohlen für tägliche Anwendung."
    ],
    features: [
      {
        title: "Sanft wirksam",
        body: "Entfernt abgestorbene Hautschuppen, ohne die Haut zu reizen.",
        icon: "leaf"
      },
      {
        title: "Erreicht den Rücken",
        body: "Verlängerte Form für müheloses Peelen schwer erreichbarer Stellen.",
        icon: "arrows"
      },
      {
        title: "Silberionen-Hygiene",
        body: "Antibakterielle Wirkung – trocknet in unter 15 Minuten.",
        icon: "shield"
      },
      {
        title: "Spa-Erlebnis",
        body: "Verwandelt deine tägliche Dusche in eine Wellness-Routine.",
        icon: "sparkle"
      }
    ],
    highlights: [
      "Mit antibakteriellen Silberionen",
      "Quick-Dry Technologie",
      "Ergonomisch verlängert",
      "Dermatologisch empfohlen",
      "Gratis Versand in der Schweiz"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
        alt: "Renuvia SilkTouch in der Dusche"
      },
      {
        src: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=1200&q=80",
        alt: "Spa Pflegeritual"
      },
      {
        src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&q=80",
        alt: "Hautpflege"
      }
    ],
    variants: [
      { id: "white", name: "Pure White", swatch: "#F5EFE6" },
      { id: "pink", name: "Blossom Pink", swatch: "#F5A3B6" }
    ]
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number, currency: "CHF" = "CHF") {
  return `${currency} ${amount.toFixed(2)}`;
}
