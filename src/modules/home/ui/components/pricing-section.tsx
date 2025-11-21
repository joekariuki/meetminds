"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for trying out MeetMinds",
    features: [
      "2 custom AI agents",
      "2 meetings per month",
      "Up to 60 minutes of recordings",
      "Basic transcripts",
      "2GB cloud storage",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Plus",
    price: 15,
    description: "For regular coaching sessions",
    features: [
      "5 custom AI agents",
      "5 meetings per month",
      "Up to 300 minutes of recordings",
      "AI-powered summaries",
      "10GB cloud storage",
      "Priority support",
    ],
    cta: "Start Plus",
    highlighted: true,
    badge: "Popular",
  },
  {
    name: "Premium",
    price: 25,
    description: "For power users",
    features: [
      "15 custom AI agents",
      "15 meetings per month",
      "Up to 900 minutes of recordings",
      "Advanced AI insights",
      "50GB cloud storage",
      "Priority support",
      "Custom agent training",
    ],
    cta: "Start Premium",
    highlighted: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your coaching needs. All plans include
            core features.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-lg bg-muted">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                !isAnnual
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                isAnnual
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annual
              <Badge className="ml-2" variant="secondary">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-xl border bg-card p-8",
                plan.highlighted &&
                  "border-primary shadow-lg ring-1 ring-primary/20"
              )}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? Math.floor(plan.price * 0.83) : plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {isAnnual && plan.price > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Billed annually (${Math.floor(plan.price * 0.83 * 12)}/year)
                  </p>
                )}
              </div>

              <Button
                className="w-full mb-6"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href="/sign-up">{plan.cta}</Link>
              </Button>

              <div className="space-y-3">
                <p className="text-sm font-medium">What&apos;s included:</p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include access to core features. Upgrade or downgrade
          anytime.
        </p>
      </div>
    </section>
  );
}
