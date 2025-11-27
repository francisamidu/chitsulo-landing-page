"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  IconMail as Mail,
  IconPhone as Phone,
  IconMessage as MessageCircle,
} from "@tabler/icons-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          description: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today to discuss your metal fabrication project. Our
              team is ready to provide you with a professional quote.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+265 (1) 123 456</p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Fri, 8am - 5pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@chitsulo.com</p>
                  <p className="text-sm text-muted-foreground">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Workshop</h4>
                  <p className="text-muted-foreground">Blantyre, Malawi</p>
                  <p className="text-sm text-muted-foreground">
                    On-site visits available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2  border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2  border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2  border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="+260..."
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2  border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <option value="">Select a service</option>
                  <option value="gates">Custom Gates</option>
                  <option value="burglar-bars">Burglar Bars & Windows</option>
                  <option value="furniture">Steel Furniture</option>
                  <option value="kiosks">Kiosks & Structures</option>
                  <option value="repairs">Emergency Repairs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  Thank you! We'll contact you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-red-700 text-white py-3"
              >
                {isSubmitting ? "Sending..." : "Send Quote Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
