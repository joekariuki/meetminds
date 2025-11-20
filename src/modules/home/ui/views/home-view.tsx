"use client";

import { LandingNavbar } from "../components/landing-navbar";
import { HeroSection } from "../components/hero-section";
import { FeaturesSection } from "../components/features-section";
// import { PricingSection } from "../components/pricing-section";
import { CTASection } from "../components/cta-section";
import { LandingFooter } from "../components/landing-footer";

export function HomeView() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        {/* <PricingSection /> */}
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
