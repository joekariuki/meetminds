"use client";

import { useEffect, useState } from "react";

import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { DashboardCommand } from "./dashboard-command";

export function DashboardNavbar() {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const [commandOpen, setCommandOpen] = useState(false);

  // Function to detect if user is on macOS
  const isMacOS = () => {
    if (typeof navigator === "undefined") return false;

    // Check for userAgentData (modern API) with type safety
    const nav = navigator as any;
    if (nav.userAgent && nav.userAgent.includes("Mac OS")) {
      return true;
    }

    // Fallback to platform (deprecated but widely supported)
    return navigator.platform.toLowerCase().includes("mac");
  };

  // Handle global keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex px-4 gap-x-4 py-3 border-b bg-background">
        <Button className="size-9" variant="outline" onClick={toggleSidebar}>
          {state === "collapsed" || isMobile ? (
            <PanelLeftIcon className="size-4" />
          ) : (
            <PanelLeftCloseIcon className="size-4" />
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCommandOpen((open) => !open)}
          className="h-9 w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground/80"
        >
          <SearchIcon className="size-4" />
          Search
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-mono font-medium text-muted-foreground">
            {isMacOS() ? (
              <span className="text-xs">&#8984;</span>
            ) : (
              <span className="text-xs">Ctrl</span>
            )}
            <span className="text-xs">+ K</span>
          </kbd>
        </Button>
      </nav>
    </>
  );
}
