import { Button } from "@/components/ui/button";
import {
  IconArrowBigRightFilled as IconArrow,
  IconPlayerPlayFilled as IconPlay,
  IconChevronLeft as ChevronLeft,
  IconChevronRight as ChevronRight,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function Hero() {
  const features = [
    {
      title: "Quality Control System",
      description:
        "We enhance our industry operations to ensure you of the worries associated.",
    },
    {
      title: "Accurate Testing Processes",
      description:
        "We'll work with you on your project, we'll fine tune your new construction.",
    },
    {
      title: "Highly Professional & Expert Staff",
      description:
        "Smooth, easy & instant bonding with full control over your load to reduce labour.",
    },
    {
      title: "Serving An Impressive List Of Clients With Expertise!",
      description:
        "Dedication to quality, innovation and a constant objective to serve the global market a decade young industry.",
      isHighlight: true,
    },
  ];

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/welding-1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <button className="absolute left-4 z-20 text-white hover:text-gray-300">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button className="absolute right-4 z-20 text-white hover:text-gray-300">
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Welding And Metal Works
          </h1>
          <p className="text-lg text-white mb-8 text-balance max-w-2xl mx-auto">
            Our worldwide presence ensures timeliness, cost efficiency and
            compliance adherence required to ensure your serving you with great
            expertise as one of the World's leading Corporation diversified
            construction management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 text-white px-8 py-6 rounded-none hover:bg-red-700 font-semibold"
            >
              <IconArrow className="w-5 h-5 mr-2" /> Our Services
            </Button>
            <Link
              className="flex flex-row items-center justify-center text-white gap-3"
              to="#how-it-works"
            >
              <Button
                className="rounded-full bg-white p-3 hover:bg-white"
                size="icon"
              >
                <IconPlay className="text-black w-5 h-5" />
              </Button>
              <span className="font-semibold">How it works</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 flex flex-col justify-around ${
                  feature.isHighlight
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-900 border-r-2"
                }`}
              >
                <h3 className="text-lg font-bold mb-3 text-balance">
                  {feature.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    feature.isHighlight ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
