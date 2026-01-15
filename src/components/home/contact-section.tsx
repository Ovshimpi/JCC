"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Have a question or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <FadeIn delay={200}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-body">Email</h3>
                    <p className="text-foreground/80">Send us an email and we'll get back to you.</p>
                    <a href="mailto:contact@jccconsulting.com" className="text-primary hover:underline">
                      contact@jccconsulting.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-body">Phone</h3>
                    <p className="text-foreground/80">Give us a call during business hours.</p>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-body">Office</h3>
                    <p className="text-foreground/80">123 Career Path, Success City, 10101</p>
                    <a href="#" className="text-primary hover:underline" onClick={(e) => e.preventDefault()}>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <Input placeholder="Your Name" aria-label="Your Name" suppressHydrationWarning />
                    <Input type="email" placeholder="Your Email" aria-label="Your Email" suppressHydrationWarning />
                    <Textarea placeholder="Your Message" rows={5} aria-label="Your Message" suppressHydrationWarning />
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-yellow-700 text-primary-foreground hover:opacity-90 transition-opacity" suppressHydrationWarning>Send Message</Button>
                </form>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
