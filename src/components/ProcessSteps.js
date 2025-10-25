"use client";
import {
  Check,
  Brain,
  HelpCircle,
  Code2,
  Truck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    title: "Discover",
    subtitle: "We ask, listen, and learn.",
    description:
      "Before jumping into development, we start by understanding your world. We want to know your goals, your customers, and what’s standing in your way. This helps us see the big picture and spot hidden opportunities.",
    points: [
      "Get aligned on your vision and challenges",
      "Study what others in your space are doing",
      "Talk to your team, your users, and maybe even your customers",
      "Gather insights about your market",
    ],
    outcome: "A clear understanding of the problem we’re solving together.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-emerald-400" />,
    title: "Define",
    subtitle: "We make sense of what we’ve learned.",
    description:
      "Now that we’ve collected all the pieces, we sort through them to find the real problems to solve. We focus on what matters most — for your users and your business.",
    points: [
      "Identify key pain points",
      "Map out the path forward",
      "Focus on the people we’re designing for",
      "Set clear goals and priorities",
    ],
    outcome: "A shared game plan that guides everything that follows.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Develop",
    subtitle: "We design, build, and test ideas.",
    description:
      "This is where the magic starts to happen. We explore different ways to solve the problem, create early versions, and get real feedback — fast.",
    points: [
      "Brainstorm ideas together",
      "Design interfaces that reflect your brand",
    ],
    outcome: "Tested solutions that bring your vision to life, step by step.",
  },
  {
    icon: <Truck className="w-6 h-6 text-emerald-400" />,
    title: "Deliver",
    subtitle: "We launch with care and confidence.",
    description:
      "Once everything’s working just right, we help you get ready to launch. We make sure it looks great, works smoothly, and is ready for the real world.",
    points: [
      "Run tests to make sure everything works perfectly",
      "Launch or hand off with zero confusion",
      "Tweak the details until it feels just right",
      "Provide support materials and documentation",
    ],
    outcome: "A polished, high-quality product ready to go live.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Evolve",
    subtitle: "We don’t stop at launch.",
    description:
      "The best products grow over time. We stay with you after launch to track how things are going, make improvements, and help you keep getting better.",
    points: [
      "Monitor how people are using your product",
      "Make small changes that add up to big results",
      "Keep refining and improving",
      "Offer ongoing support and updates",
    ],
    outcome:
      "A product that gets better every day — and a partner who grows with you.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 max-w-7xl mx-auto bg-transparent text-white space-y-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className="rounded-2xl bg-gradient-to-r from-emerald-900/20 to-emerald-900/70 shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-emerald-400 rounded-md">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-emerald-400">
              {step.title}
            </h3>
          </div>

          {/* Subtitle */}
          <h4 className="font-semibold italic mb-3">{step.subtitle}</h4>

          {/* Description */}
          <p className="text-sm text-neutral-300 mb-6 max-w-3xl">
            {step.description}
          </p>

          {/* Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 mb-6">
            {step.points.map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-400 text-black mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <p className="text-sm mb-0 mt-2 text-neutral-200">{point}</p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div>
            <h5 className="font-semibold mb-1">What you get?</h5>
            <p className="text-sm text-neutral-300">{step.outcome}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
