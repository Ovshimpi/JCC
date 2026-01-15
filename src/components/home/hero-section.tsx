import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            Forge Your Professional Destiny
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            At JCC Consulting, we sculpt career trajectories. We provide the master tools and insider knowledge to navigate your professional journey with precision and confidence.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <blockquote className="mt-8 max-w-2xl mx-auto italic text-foreground/70">
            "The future belongs to those who believe in the beauty of their dreams."
          </blockquote>
        </FadeIn>
        <FadeIn delay={500}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
