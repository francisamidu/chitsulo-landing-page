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
      name: "Sarah Blake",
      role: "Ceo Manager",
      text: "Expertly trained team members who take the extra step and go the extra mile. With highly innovative and dynamic solutions to our customers! I've seen great companies serving our industry solutions in my career.",
      image: "/avatar-woman.svg",
    },
    {
      id: "2",
      name: "John Smith",
      role: "Operations Director",
      text: "Outstanding service and support. The team goes above and beyond to ensure our projects are completed on time and within budget. Their expertise in the metal works industry is unmatched.",
      image: "/avatar-man.svg",
    },
    {
      id: "3",
      name: "Maria Garcia",
      role: "Project Manager",
      text: "Reliable partners who understand our business needs perfectly. Their commitment to quality and excellence has transformed how we operate. We couldn't ask for better collaboration.",
      image: "/avatar-woman.svg",
    },
  ];
}
