import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ImagePlaceholder, PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function AboutSection() {
  const aboutImages = [
    PlaceHolderImages.find(p => p.id === 'office-meeting'),
    PlaceHolderImages.find(p => p.id === 'about-gallery-1'),
    PlaceHolderImages.find(p => p.id === 'about-gallery-2'),
  ].filter(p => p) as ImagePlaceholder[];

  return (
    <section id="about" className="w-full py-20 md:py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">About JCC Career Consultancy</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
              Your trusted partner in career development.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-5 gap-8 items-center">
            <FadeIn delay={200} direction="right" className="md:col-span-3">
              <div className="space-y-4 text-foreground/90">
                <p>
                  At JCC Career Consultancy, we are passionate about helping professionals achieve their career aspirations. Founded on the principle that everyone deserves a fulfilling career, we've dedicated ourselves to providing top-tier, personalized career services.
                </p>
                <p>
                  Our team of experienced consultants brings a wealth of industry knowledge from various sectors. We understand the nuances of the modern job market and what it takes to stand out.
                </p>
                <p>
                  We believe in a collaborative approach, working closely with you to understand your unique strengths, ambitions, and challenges. Our mission is to equip you with the tools, strategies, and confidence to not just find a job, but to build a thriving career.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200} direction="left" className="md:col-span-2">
              <Carousel className="rounded-lg overflow-hidden shadow-lg">
                <CarouselContent>
                  {aboutImages.map((img, index) => (
                    <CarouselItem key={index}>
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover aspect-[3/2]"
                          data-ai-hint={img.imageHint}
                        />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </FadeIn>
          </div>
      </div>
    </section>
  );
}
