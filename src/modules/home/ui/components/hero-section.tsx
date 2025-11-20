"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as floatingAvatar from "./floating-avatar";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      {/* Floating avatars */}
      <floatingAvatar.FloatingAvatar
        seed="Spanish Tutor"
        label="Spanish Tutor"
        variant="openPeeps"
        className="top-20 left-[5%] sm:left-[10%]"
        delay={0}
      />
      <floatingAvatar.FloatingAvatar
        seed="Business Coach"
        label="Business Coach"
        variant="openPeeps"
        className="top-32 right-[5%] sm:right-[15%]"
        delay={0.5}
      />
      <floatingAvatar.FloatingAvatar
        seed="Wellness Coach"
        label="Wellness Coach"
        variant="openPeeps"
        className="bottom-32 left-[5%] sm:left-[15%]"
        delay={1}
      />
      <floatingAvatar.FloatingAvatar
        seed="Career Advisor"
        label="Career Advisor"
        variant="openPeeps"
        className="bottom-20 right-[5%] sm:right-[10%]"
        delay={1.5}
      />
      <floatingAvatar.FloatingAvatar
        seed="Life Coach"
        label="Life Coach"
        variant="openPeeps"
        className="top-1/2 left-[2%] sm:left-[5%] hidden md:block"
        delay={2}
      />
      <floatingAvatar.FloatingAvatar
        seed="French Tutor"
        label="French Tutor"
        variant="openPeeps"
        className="top-1/3 right-[3%] sm:right-[8%] hidden md:block"
        delay={2.5}
      />
      <floatingAvatar.FloatingAvatar
        seed="Fitness Coach"
        label="Fitness Coach"
        variant="openPeeps"
        className="bottom-40 right-[10%] sm:right-[20%] hidden lg:block"
        delay={3}
      />
      <floatingAvatar.FloatingAvatar
        seed="Music Tutor"
        label="Music Tutor"
        variant="openPeeps"
        className="top-1/4 left-[5%] sm:left-[12%] hidden lg:block"
        delay={3.5}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-dm-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Talk to custom AI agents on a live call
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Create AI coaches or tutors, have real conversations, and get
            automatic transcripts, summaries, and searchable insights.
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
