export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export function getProjects() {
  return [
    {
      id: "p1",
      title: "Custom Security Gate",
      category: "Residential Gates",
      description:
        "Heavy-duty custom-designed steel sliding gate with integrated locking mechanism",
      imageUrl: "/fence.webp",
    },
    {
      id: "p2",
      title: "Residential Window Bars",
      category: "Burglar Bars & Windows",
      description:
        "Reinforced steel window frame and burglar bars for residential properties",
      imageUrl: "/burglar-bars.webp",
    },
    {
      id: "p3",
      title: "Steel Pipes",
      category: "Metal Works",
      description:
        "High-quality steel pipes fabricated to custom specifications for construction use",
      imageUrl: "/steel-piping.webp",
    },
    {
      id: "p4",
      title: "Metal Sheets",
      category: "Metal Works",
      description:
        "Durable steel sheets fabricated for various construction applications",
      imageUrl: "/metal-sheets.webp",
    },
    {
      id: "p5",
      title: "Roofing Products",
      category: "Roofing & Gutters",
      description:
        "Corrugated metal roofing sheets and gutter systems for residential and commercial buildings",
      imageUrl: "/roof.webp",
    },
    {
      id: "p6",
      title: "Hardware Products",
      category: "Metal Works",
      description:
        "Assorted metal hardware products including hinges, brackets, and fasteners",
      imageUrl: "/hardwares.webp",
    },
  ];
}

export function getTestimonials() {
  return [
    {
      id: "1",
      name: "James Mwale",
      role: "Property Owner",
      text: "Chitsulo Fabricators installed a custom gate on my home and the quality is exceptional. Professional, reliable, and affordable. Highly recommended!",
      image: "/avatar-man.svg",
    },
    {
      id: "2",
      name: "Sarah Banda",
      role: "Business Manager",
      text: "We commissioned them for window security bars on our retail shop. Their craftsmanship and attention to detail exceeded our expectations. Great customer service too.",
      image: "/avatar-woman.svg",
    },
    {
      id: "3",
      name: "Robert Ncube",
      role: "Restaurant Owner",
      text: "Had emergency repairs needed on our kitchen equipment. Chitsulo responded quickly and fixed it perfectly. They understand our business needs.",
      image: "/avatar-man.svg",
    },
  ];
}
