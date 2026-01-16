import { Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

function WhatsappIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}


export default function Footer() {
  return (
    <footer className="bg-card/50 border-t" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-baseline gap-2" prefetch={false}>
              <span className="font-headline text-2xl font-bold text-primary">
                JCC
              </span>
              <span className="text-lg text-foreground/90 font-body">
                Career Consultancy
              </span>
            </Link>
            <p className="text-sm text-foreground/70 mt-2">Elevating Careers, One Professional at a Time.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <Twitter className="h-6 w-6 text-foreground/80 hover:text-[#1DA1F2] transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <Facebook className="h-6 w-6 text-foreground/80 hover:text-[#1877F2] transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <Linkedin className="h-6 w-6 text-foreground/80 hover:text-[#0A66C2] transition-colors" />
            </Link>
            <Link href="https://wa.me/917987376854" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" prefetch={false}>
              <WhatsappIcon className="h-6 w-6 text-foreground/80 hover:text-[#25D366] transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-foreground/70">
          <p>&copy; 2026 JCC Career Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
