import { Button } from "@/components/ui/button";
import {
  IconChevronRight,
  IconCircleCheckFilled as IconCircleCheck,
} from "@tabler/icons-react";

export default function About() {
  return (
    <section className="bg-white px-6 py-20 lg:px-20">
      <div className="mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left - Image Collage */}
        <div className="relative h-96 w-full lg:h-full lg:min-h-[500px]">
          {/* Large Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/welding-1.webp"
              alt="Welding work"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Small Overlapping Image - Bottom Right Corner */}
          <div className="absolute -bottom-8 -right-8 h-48 w-48 overflow-hidden border-12 border-white">
            <img
              src="/welding-2.webp"
              alt="Welding close-up"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-6">
          {/* Red Accent Text */}
          <p className="text-sm font-semibold text-red-600">
            Utilizing Latest Processing Solutions With Decades Of Work
            Experience
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Serving Since 1970 With Expertise & Strategies.
          </h2>

          {/* Description */}
          <p className="text-base font-semibold text-gray-700 leading-relaxed">
            Yet those that embrace change are thriving, building bigger, better,
            faster, and stronger products than ever before. You are helping to
            lead the change; we can help you build on your past successes and
            prepare for future.
          </p>

          <p className="text-sm text-gray-500">
            Our shop is recognized as one of the Blantyre's leading welding and
            fabrication serving an impressive list of long-term clients with
            experience and expertise in multiple industries.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 py-6">
            <div className="flex items-start gap-3">
              <IconCircleCheck className="h-6 w-6 shrink-0 text-red-600" />
              <span className="text-sm font-semibold text-gray-900">
                Satisfaction Guarantee
              </span>
            </div>
            <div className="flex items-start gap-3">
              <IconCircleCheck className="h-6 w-6 shrink-0 text-red-600" />
              <span className="text-sm font-semibold text-gray-900">
                Professional & Qualified
              </span>
            </div>
            <div className="flex items-start gap-3">
              <IconCircleCheck className="h-6 w-6 shrink-0 text-red-600" />
              <span className="text-sm font-semibold text-gray-900">
                Accurate Test Processes
              </span>
            </div>
            <div className="flex items-start gap-3">
              <IconCircleCheck className="h-6 w-6 shrink-0 text-red-600" />
              <span className="text-sm font-semibold text-gray-900">
                Highly Professional Staff
              </span>
            </div>
          </div>

          {/* CTA and Testimonial */}
          <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center">
            <Button className="bg-gray-900 px-8 py-6 text-base font-semibold text-white hover:bg-gray-800">
              <IconChevronRight className="w-5 h-5" />
              Schedule An Appointment
            </Button>

            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900">
                Steve Kalikho
              </p>
              <p className="text-xs text-red-500">The Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
