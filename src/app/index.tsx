import "./index.css";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import History from "@/components/sections/history";
import ProjectGallery from "@/components/sections/project-gallery";
import QuoteForm from "@/components/sections/quote-form";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import { getProjects, getTestimonials } from "@/lib/data";

export default function Home() {
  const projects = getProjects();
  const testimonials = getTestimonials();

  return (
    <main>
      <Navbar />
      <Hero />
      <History />
      <Services />
      <ProjectGallery projects={projects} />
      <Testimonials testimonials={testimonials} />
      <QuoteForm />
      <Footer />
    </main>
  );
}
