import { Briefcase, FileText, Linkedin, Mail, Presentation, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ReactElement } from "react";

const services = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Resume Writing",
    description: "Craft a compelling, professional resume that stands out to recruiters and lands you interviews. We tailor your resume to your target roles.",
  },
  {
    icon: <Linkedin className="h-10 w-10 text-primary" />,
    title: "LinkedIn Profile Building",
    description: "Optimize your LinkedIn profile to attract opportunities. We'll help you build a powerful personal brand and expand your professional network.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Interview Prep",
    description: "Gain the confidence to ace any interview. Our mock interviews and personalized feedback will prepare you for success.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Campus to Corporate",
    description: "Smoothly transition from student life to the corporate world. We provide essential skills and guidance for a successful start to your career.",
  },
  {
    icon: <Presentation className="h-10 w-10 text-primary" />,
    title: "Presentation Skills",
    description: "Deliver impactful presentations with confidence. Our training covers everything from slide design to public speaking techniques.",
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: "Email Writing",
    description: "Master the art of professional email communication. Learn to write clear, concise, and effective emails for any business context.",
  },
];

interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-card">
      <CardHeader className="flex flex-col items-center text-center gap-4 pt-8">
        {icon}
        <h3 className="font-headline text-2xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="pb-8">
        <p className="text-center text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function ServicesSection() {
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
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
