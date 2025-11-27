import React from "react";

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "Discuss your project requirements and vision",
    },
    {
      step: "02",
      title: "Design",
      description: "Custom design and planning for your project",
    },
    {
      step: "03",
      title: "Fabrication",
      description: "Expert welding and metal fabrication",
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional on-site installation and finishing",
    },
  ];

  return (
    <div className="border-t border-border pt-20">
      {/* Our Process */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
        Our Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Connector line */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-primary/40 to-transparent"></div>
            )}

            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center font-bold text-2xl text-primary-foreground mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
