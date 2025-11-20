"use client";

import Link from "next/link";
import { SiGithub as GithubIcon } from "react-icons/si";
import { SiLinkedin as LinkedinIcon } from "react-icons/si";
import { SiX as XIcon } from "react-icons/si";

export function LandingFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Left: Author info */}
          <div className="flex flex-col items-center md:items-start gap-2 text-xs text-muted-foreground">
            <p>
              Created by{" "}
              <Link
                href="https://x.com/joekariuki"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors"
              >
                @joe.kariuki
              </Link>
            </p>
            <p>
              Open source and available on{" "}
              <Link
                href="https://github.com/joekariuki/meetminds"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            </p>
          </div>

          {/* Middle: Copyright */}
          <div className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} MeetMinds. All rights reserved.
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/joekariuki/meetminds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </Link>
            <Link
              href="https://x.com/joekariuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="size-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joe-kariuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
