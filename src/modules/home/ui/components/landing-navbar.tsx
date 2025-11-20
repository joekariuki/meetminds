"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiGithub as GithubIcon } from "react-icons/si";

export function LandingNavbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="MeetMinds Logo"
            />
            <span className="font-semibold text-xl">MeetMinds</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <Link
                href="https://github.com/joekariuki/meetminds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" />
                Star on GitHub
              </Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
