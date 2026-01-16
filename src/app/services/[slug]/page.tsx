import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-24 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-8">
                <Button asChild variant="outline">
                  <Link href="/#services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">{service.title}</h1>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <FadeIn delay={200} direction="right" className="md:col-span-3">
                <div className="space-y-10 text-foreground/90">
                  
                  <div className="space-y-4">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2">Why It's Important</h2>
                    <p className="text-lg leading-relaxed">{service.importance}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2">How We Help</h2>
                    <p className="text-lg leading-relaxed">{service.howWeHelp}</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2">Key Deliverables</h2>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </FadeIn>
              <FadeIn delay={200} direction="left" className="md:col-span-2 sticky top-24">
                <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
                  <CarouselContent>
                    {service.images.map((img, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          width={600}
                          height={450}
                          className="w-full h-auto object-cover aspect-[4/3]"
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
            
            <FadeIn delay={400}>
              <div className="mt-16 space-y-10">
                <div className="space-y-4">
                  <h2 className="font-headline text-center text-3xl font-semibold">Our Process</h2>
                  <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
                     <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                      {service.process.map((item, index) => (
                        <div key={index} className="relative flex-1 flex flex-col items-center text-center max-w-xs">
                          <div className="absolute top-1/2 left-1/2 w-0.5 h-full bg-border -translate-x-1/2 md:hidden"></div>
                          <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-3 border-4 border-background">
                            {item.step}
                          </div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-foreground/80">{item.description}</p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-headline text-center text-3xl font-semibold">Frequently Asked Questions</h2>
                   <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {service.faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                
                <div className="text-center pt-8">
                   <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-700 text-primary-foreground hover:opacity-90 transition-opacity">
                      <Link href="/#contact">
                        Book a Free Consultation
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
