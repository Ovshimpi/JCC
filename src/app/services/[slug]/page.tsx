import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
                <div className="space-y-8 text-foreground/90">
                  <div>
                    <h2 className="font-headline text-2xl font-semibold mb-3">Why It's Important</h2>
                    <p className="text-lg leading-relaxed">{service.importance}</p>
                  </div>
                  <div>
                    <h2 className="font-headline text-2xl font-semibold mb-3">How It Plays a Crucial Role</h2>
                    <p className="text-lg leading-relaxed">{service.crucialRole}</p>
                  </div>
                  <div>
                    <h2 className="font-headline text-2xl font-semibold mb-3">More Details</h2>
                    <p className="text-lg leading-relaxed">{service.details}</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={200} direction="left" className="md:col-span-2">
                <Card className="overflow-hidden shadow-lg rounded-lg sticky top-24">
                  <CardContent className="p-0">
                    <Image
                      src={service.image.imageUrl}
                      alt={service.image.description}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                      data-ai-hint={service.image.imageHint}
                    />
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
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
