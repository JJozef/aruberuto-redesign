"use client";
import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  bgImageClass,
  bgImage,
}: {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  bgImageClass?: string;
  bgImage?: CSSProperties;
}) => {
  return (
    <section
      className={cn(
        "mx-auto w-full bg-red-800 relative rounded-2xl overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        {bgImage && (
          <>
            <div
              style={bgImage}
              className={cn("absolute inset-0 z-[0]", bgImageClass)}
            />
            <div className="absolute inset-0 z-[1] bg-black opacity-80" />
          </>
        )}
        <div
          className={cn("relative z-[2] h-full px-4 py-20 sm:px-10 backdrop-blur-[2px]", className)}
        >
          <Noise />
          {children}
        </div>
      </div>
    </section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 z-[0] w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/assets/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
