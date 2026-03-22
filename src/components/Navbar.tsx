import Link from "next/link";
import { Github, Coffee, Activity } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import SvgIcon from "./icons/svg-icon";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl mx-auto items-center justify-between px-6 md:px-12 xl:px-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-1.5 rounded-none group-hover:bg-primary/20 transition-colors">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold sm:inline-block tracking-tight text-lg">
              Statsman
            </span>
          </Link>

          <div className="flex items-center gap-2 ml-6">
            <Link
              href="/explore"
              className="flex items-center px-3 py-1 gap-2 font-semibold text-muted-foreground hover:text-foreground rounded-none border border-border/60 bg-background/50 hover:bg-muted/70 transition-colors"
            >
              <span className="hidden xl:inline-block">Explore Data</span>
              <span className="xl:hidden">Explore</span>
            </Link>

            <Link
              href="/india"
              className="flex items-center px-3 py-1 gap-2 font-semibold text-muted-foreground hover:text-foreground rounded-none border border-border/60 bg-background/50 hover:bg-muted/70 transition-colors"
            >
              <SvgIcon className="h-5 w-5" icon={"IndiaFlag"} />
              <span className="hidden sm:inline-block">India</span>
            </Link>
          </div>

        </div>

        <nav className="flex items-center gap-3 md:gap-4 text-sm font-medium">

          <ThemeToggle />

          <Link
            href="https://github.com/shenoy-anurag/statsman"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-3 py-1.5 gap-2 border text-muted-foreground hover:text-foreground transition-colors"
          >
            <SvgIcon className="h-5 w-5" icon={"Github"} />
            <span className="hidden sm:inline-block">GitHub</span>
          </Link>
          <Link
            href="https://buymeacoffee.com/anuragshenoy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors px-3 py-1.5 rounded-none"
          >
            <Coffee className="h-4 w-4" />
            <span className="hidden sm:inline-block font-semibold">Support</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
