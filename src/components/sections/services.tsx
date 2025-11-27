"use client";

import { ArrowRightCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function Services() {
  const services = [
    {
      title: "Steel Welding",
      description:
        "We specialize in Steel Welding. Our welds are of exceptional quality and durability, tailored to meet the specific requirements of custom designs and industrial projects. By trusting, you can expect reliable service, unrivaled welding expertise, and welds that will endure the challenges of time. We handle diverse welding needs, from intricate custom designs to robust industrial structures, with expertise and precision.",
      image: "/welding-3.webp",
    },
    {
      title: "Steel Selling",
      description:
        "We offer a wide range of steel products for various applications. Our steel is sourced from trusted suppliers and is available in different grades and specifications to meet your project requirements.",
      image: "/steel-pipes.webp",
    },
    {
      title: "Fencing Products",
      description:
        "We offer a wide range of fences. Each fence is carefully made with high-quality materials using modern techniques to guarantee exceptional durability and functionality. Whether you require protection for your property, an attractive addition to your home's exterior, or clear boundaries, our specialists will assist you in selecting the ideal fencing option that aligns with your budget and requirements. ",
      image: "/fence.webp",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold text-sm mb-4">
            High Performance Services For Multiple Industries!
          </p>
          <h2 className="text-4xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Utilising Latest Processing Solutions, And Decades Of Work
            Experience.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div key={index} className="relative h-96">
              {/* Background Image */}
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />

              {/* Content Card - Absolutely positioned, overlapping bottom of image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3  rounded-lg shadow-xl w-4/5">
                <div className="bg-white p-6 border-b">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <Button className="bg-white hover:bg-red-700 hover:text-white text-black font-semibold p-6 w-full transition-colors inline-flex items-center gap-3">
                  <ArrowRightCircle />
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with Clients */}
        <div className="border-t pt-12 text-center">
          <p className="text-gray-600 mb-2">
            Serving an impressive list of clients with experience in multiple
            industries.{" "}
            <a
              href="#"
              className="text-foreground font-semibold hover:text-red-600 transition-colors"
            >
              Contact Head Office
            </a>
          </p>

          {/* Client Logos */}
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <div className="text-foreground font-bold text-sm">SAUTER</div>
            <div className="text-foreground font-bold text-sm">Evolved</div>
            <div className="text-foreground font-bold text-sm">TECHBRAND</div>
            <div className="text-foreground font-bold text-sm">SMATRICS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
