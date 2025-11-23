"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import * as floatingAvatar from "./floating-avatar";

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const tooltipDuration = 3000; // 3 seconds per tooltip

  const avatars = [
    {
      seed: "Spanish Tutor",
      label: "Spanish Tutor",
      variant: "openPeeps" as const,
      className: "top-20 left-[5%] sm:left-[10%]",
      delay: 0,
    },
    {
      seed: "Business Coach",
      label: "Business Coach",
      variant: "openPeeps" as const,
      className: "top-32 right-[5%] sm:right-[15%]",
      delay: 0.5,
    },
    {
      seed: "Wellness Coach",
      label: "Wellness Coach",
      variant: "openPeeps" as const,
      className: "bottom-32 left-[5%] sm:left-[15%]",
      delay: 1,
    },
    {
      seed: "Career Advisor",
      label: "Career Advisor",
      variant: "openPeeps" as const,
      className: "bottom-20 right-[5%] sm:right-[10%]",
      delay: 1.5,
    },
    {
      seed: "Life Coach",
      label: "Life Coach",
      variant: "openPeeps" as const,
      className: "top-1/2 left-[2%] sm:left-[5%] hidden md:block",
      delay: 2,
    },
    {
      seed: "French Tutor",
      label: "French Tutor",
      variant: "openPeeps" as const,
      className: "top-1/3 right-[3%] sm:right-[8%] hidden md:block",
      delay: 2.5,
    },
    {
      seed: "Fitness Coach",
      label: "Fitness Coach",
      variant: "openPeeps" as const,
      className: "bottom-40 right-[10%] sm:right-[20%] hidden lg:block",
      delay: 3,
    },
    {
      seed: "Music Tutor",
      label: "Music Tutor",
      variant: "openPeeps" as const,
      className: "top-50 left-[5%] sm:left-[14%] hidden lg:block",
      delay: 3.5,
    },
  ];

  useEffect(() => {
    // Only run animation on non-mobile screens
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % avatars.length);
    }, tooltipDuration);

    return () => clearInterval(interval);
  }, [avatars.length, isMobile]);

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      {/* Floating avatars */}
      {avatars.map((avatar, index) => (
        <floatingAvatar.FloatingAvatar
          key={avatar.seed}
          seed={avatar.seed}
          label={avatar.label}
          variant={avatar.variant}
          className={avatar.className}
          delay={avatar.delay}
          isActive={!isMobile && activeIndex === index}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-dm-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Create custom AI agents for live calls
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Build personalized coaches, tutors, or advisors, speak with them in
            real-time and let AI handle the notes, transcripts, and summaries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="font-semibold">
              <Link href="/sign-up" className="">
                Start your call
                <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>

          {/* Demo video placeholder */}
          {/* <div
						id="demo"
						className="relative rounded-xl overflow-hidden border shadow-2xl bg-muted/50 backdrop-blur"
					>
						<div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
							<div className="text-center space-y-2">
								<PlayCircleIcon className="size-16 mx-auto text-muted-foreground/50" />
								<p className="text-sm text-muted-foreground">
									Demo video coming soon
								</p>
							</div>
						</div>
					</div> */}
        </div>
      </div>
    </section>
  );
}
