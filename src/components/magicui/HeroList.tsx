"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Missed Call Captured",
      description: "Lippy AI handled a missed call.",
      time: "5m ago",
      icon: "📞",
      color: "#FF5733",
    },
    {
      name: "AI Setup Complete",
      description: "Your AI agent is now live.",
      time: "1h ago",
      icon: "🤖",
      color: "#3498DB",
    },
    {
      name: "New Feature Coming Soon",
      description: "Self-setup feature launching soon!",
      time: "2d ago",
      icon: "🚀",
      color: "#FFB800",
    },
    {
      name: "Voicemail Replaced",
      description: "Lippy AI captured all calls in real-time.",
      time: "15m ago",
      icon: "📬",
      color: "#FF3D71",
    },
    {
      name: "AI Turned On",
      description: "AI is handling customer calls.",
      time: "20m ago",
      icon: "⚙️",
      color: "#00C9A7",
    },
    {
      name: "New Dedicated Line",
      description: "Your new business number is ready.",
      time: "30m ago",
      icon: "📱",
      color: "#1E86FF",
    },
  ];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[350px] overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-400 ease-in-out hover:scale-[110%]",
        // light styles
        "bg-green [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-button dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-white-200">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
