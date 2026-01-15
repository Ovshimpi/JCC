import { Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-baseline gap-2" prefetch={false}>
              <span className="font-headline text-2xl font-bold text-primary">
                JCC
              </span>
              <span className="text-lg text-foreground/80 font-body">
                Consulting
              </span>
            </Link>
            <p className="text-sm text-foreground/60 mt-2">Elevating Careers, One Professional at a Time.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <Twitter className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <Facebook className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <Linkedin className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} JCC Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
