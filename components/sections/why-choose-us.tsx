import {
  IconAward as Award,
  IconCircleCheck as CheckCircle,
  IconRefresh as Zap,
  IconUsers as Users,
} from "@tabler/icons-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Over 50 years of welding and metal fabrication expertise",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Emergency repairs and expedited fabrication available",
  },
  {
    icon: Users,
    title: "Custom Solutions",
    description: "Personalized designs tailored to your specific needs",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "All work meets local standards and exceeds expectations",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white absolute left-1/2 -bottom-44 -translate-x-1/2 w-full max-w-6xl px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx}>
                  <div className="mb-4 flex items-center">
                    <div className="flex flex-row items-center">
                      <Icon className="w-7 h-7 text-primary" />
                      <h3 className="text-lg font-semibold">{reason.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
