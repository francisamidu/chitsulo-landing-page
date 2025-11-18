"use client";

import { useState } from "react";
import {
  IconChevronLeft as ChevronLeft,
  IconChevronRight as ChevronRight,
  IconUsers as Users,
  IconCircleCheck as CheckCircle2,
} from "@tabler/icons-react";
import { Testimonial } from "@/lib/data";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];
  console.log(current);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Red Background with Features */}
          <div className="bg-red-600 text-white p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Constantly innovating, upholding integrity, and providing
              excellence in all operations
            </h2>

            <p className="text-white/90 mb-12 leading-relaxed text-sm">
              We consistently provide high-quality steel structure products,
              tubes, sheets, aluminum, paint, and hardware supplies. We make it
              a priority to understand and meet the unique needs of builders and
              homeowners in Malawi by offering customized solutions. Our focus
              is on providing quality, affordability, and excellent customer
              service to be the go-to partner for all construction projects in
              the country
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quality Control System</h3>
                  <p className="text-white/80 text-sm">
                    Our offerings are synonymous with quality, affordability,
                    and customer satisfaction because we specialize in
                    structural steel, tubes, sheets, aluminum, paint, and
                    hardware products.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Regular Evaluation System
                  </h3>
                  <p className="text-white/80 text-sm">
                    Regular evaluation of the suitability of our quality
                    policies and objectives enhances transparency and clarity
                    within the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dark Background with Testimonial Carousel */}
          <div className="bg-slate-900 text-white p-12 lg:p-16 flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="mb-8">
              <div className="text-6xl text-white/20">"</div>
            </div>

            {/* Testimonial Text */}
            <div className="flex-1 mb-8">
              <p className="text-white leading-relaxed mb-8">{current.text}</p>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-gray-400">{current.role}</p>
                </div>
              </div>

              {/* Navigation Chevrons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
