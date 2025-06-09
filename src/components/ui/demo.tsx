"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Lightbulb, Zap } from "lucide-react";

const defaultCards = [
  {
    icon: <Lightbulb className="size-4 text-blue-300" />,
    title: "Advantage 1",
    description: "Goes beyond synthetic or low-quality crowdsourced labels",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-24 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-slate-900/20 grayscale-0 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-purple-300" />,
    title: "Advantage 2",
    description: "Captures high-context, expert-driven thinking and workflows",
    date: "Just now",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] -translate-x-32 translate-y-10 hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-slate-900/20 grayscale-[40%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 before:opacity-30",
  },
  {
    icon: <Zap className="size-4 text-emerald-300" />,
    title: "Advantage 3",
    description: "Powers high-quality model training, alignment, and safety evaluation",
    date: "Just now",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-500",
    className:
      "[grid-area:stack] -translate-x-64 translate-y-20 hover:translate-y-4 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-slate-900/20 grayscale-[60%] hover:before:opacity-10 before:transition-opacity before:duration-700 hover:grayscale-[20%] before:left-0 before:top-0 before:opacity-50",
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { DisplayCardsDemo }; 