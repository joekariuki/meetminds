"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center text-balance">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to talk to your first AI agent?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Create a custom AI agent, jump on a live call, and get automatic
            transcripts and insights. Start free and explore what’s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="default" asChild className="font-semibold">
              <Link href="/sign-up">
                Create your agent
                <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
