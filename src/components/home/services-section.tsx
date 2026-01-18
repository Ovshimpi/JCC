import { Briefcase, FileText, Linkedin, Mail, Presentation, Users, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ReactElement } from "react";
import Link from "next/link";
import { services } from "@/lib/services";

interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  slug: string;
}

function ServiceCard({ icon, title, description, slug }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block h-full group">
      <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-card flex flex-col group-hover:bg-primary/5">
        <CardHeader className="flex flex-col items-center text-center gap-4 pt-8">
          {icon}
          <h3 className="font-headline text-2xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent className="pb-8 flex flex-col flex-grow">
          <p className="text-center text-foreground/80 mb-6 flex-grow">{description}</p>
          <div className="text-center mt-auto">
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background h-10 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 text-primary-foreground transition-opacity">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}


export default function ServicesSection() {
  const serviceIcons: { [key: string]: ReactElement } = {
    "resume-writing": <FileText className="h-10 w-10 text-primary" />,
    "linkedin-profile-building": <Linkedin className="h-10 w-10 text-primary" />,
    "interview-prep": <Users className="h-10 w-10 text-primary" />,
    "campus-to-corporate": <Briefcase className="h-10 w-10 text-primary" />,
    "presentation-skills": <Presentation className="h-10 w-10 text-primary" />,
    "email-writing": <Mail className="h-10 w-10 text-primary" />,
  };

  return (
    <section id="services" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              We offer a suite of services designed to empower your career journey.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 150}>
              <ServiceCard 
                icon={serviceIcons[service.slug]}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
