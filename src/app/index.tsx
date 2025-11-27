import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import ProjectGallery from "@/components/sections/project-gallery";
import Testimonials from "@/components/sections/testimonials";
import QuoteForm from "@/components/sections/quote-form";
import History from "@/components/sections/history";
import { getProjects, getTestimonials } from "@/lib/data";
import { createFileRoute } from "@tanstack/react-router";
import "./index.css";

export const Route = createFileRoute("/")({
  component: Home,
});

export default function Home() {
  const projects = getProjects();
  const testimonials = getTestimonials();

  return (
    <main>
      <Hero />
      <History />
      <Services />
      <ProjectGallery projects={projects} />
      <Testimonials testimonials={testimonials} />
      <QuoteForm />
    </main>
  );
}
