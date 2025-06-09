"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        // 移动端适配：更小尺寸，减弱左侧光影效果
        "relative flex h-40 w-72 sm:h-44 sm:w-80 md:h-52 md:w-96 skew-y-[8deg] select-none flex-col justify-between rounded-2xl border-2 bg-white/60 backdrop-blur-xl px-4 py-4 sm:px-6 sm:py-5 transition-all duration-700 shadow-2xl after:absolute after:-left-2 after:top-[-5%] after:h-[110%] after:w-16 after:bg-gradient-to-r after:from-slate-50/60 after:via-slate-50/40 after:to-transparent after:content-[''] hover:border-white/60 hover:shadow-3xl [&>*]:flex [&>*]:items-center [&>*]:gap-3",
        className
      )}
    >
      {/* 顶部图标和标题 */}
      <div>
        <span className="relative inline-block rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 shadow-lg">
          <div className="w-5 h-5 text-white">
            {icon}
          </div>
        </span>
        <div>
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">
            Human Data
          </p>
          <p className={cn("text-base sm:text-lg md:text-xl font-bold text-slate-800", titleClassName)}>
            {title}
          </p>
        </div>
      </div>
      
      {/* 主要描述文本 - 居中 */}
      <div className="flex-1 flex items-center">
        <p className="text-slate-800 font-semibold text-sm sm:text-base md:text-lg leading-snug">
          {description}
        </p>
      </div>
      
      {/* 底部时间戳和状态指示器 */}
      <div className="justify-between">
        <p className="text-slate-500 text-sm">{date}</p>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === 0 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm' 
                  : 'bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 边缘高光效果 - 减弱效果 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-transparent to-white/5 opacity-30 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Advantage 1",
      description: "Goes beyond synthetic or low-quality crowdsourced labels",
      date: "Just now",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] hover:-translate-y-24 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-slate-900/20 grayscale-0 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-purple-300" />,
      title: "Advantage 2", 
      description: "Captures high-context, expert-driven thinking and workflows",
      date: "Just now",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      // 移动端优化：较小偏移，桌面端较大偏移
      className: "[grid-area:stack] -translate-x-16 translate-y-6 md:-translate-x-32 md:translate-y-10 hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-slate-900/20 grayscale-[40%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 before:opacity-30",
    },
    {
      icon: <Sparkles className="size-4 text-emerald-300" />,
      title: "Advantage 3",
      description: "Powers high-quality model training, alignment, and safety evaluation",
      date: "Just now", 
      iconClassName: "text-emerald-500",
      titleClassName: "text-emerald-500",
      // 移动端优化：较小偏移，桌面端较大偏移
      className: "[grid-area:stack] -translate-x-32 translate-y-12 md:-translate-x-64 md:translate-y-20 hover:translate-y-4 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-slate-900/20 grayscale-[60%] hover:before:opacity-10 before:transition-opacity before:duration-700 hover:grayscale-[20%] before:left-0 before:top-0 before:opacity-50",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    // 移动端居中偏右，桌面端右对齐，增加左边距确保卡片完全显示
    <div 
      className="grid [grid-template-areas:'stack'] place-items-center lg:place-items-end opacity-100 overflow-visible ml-8 sm:ml-12 lg:ml-16"
    >
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
} 