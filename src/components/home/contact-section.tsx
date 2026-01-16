"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "+917987376854";
    const greeting = `Hello JCC, this is ${name}.`;
    const emailInfo = email ? `\nMy email is ${email}.` : "";
    const body = `\n\nMy message:\n${message}`;

    const whatsappMessage = `${greeting}${emailInfo}${body}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

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
                    <a href="mailto:joharicareercounsultancy@gmail.com" className="text-primary hover:underline">
                      joharicareercounsultancy@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-body">Phone</h3>
                    <p className="text-foreground/80">Give us a call or send a message.</p>
                    <a href="tel:+916232586854" className="text-primary hover:underline block mt-2">
                      +91 6232586854 (Calling)
                    </a>
                    <a
                      href="https://wa.me/917987376854"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline block mt-1"
                    >
                      +91 7987376854 (WhatsApp)
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-body">Office</h3>
                    <p className="text-foreground/80">182/3, magarmuha, ujjain, madhya pradesh, 456010</p>
                    <a href="#" className="text-primary hover:underline" onClick={(e) => e.preventDefault()}>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input 
                      placeholder="Your Name" 
                      aria-label="Your Name" 
                      suppressHydrationWarning
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email (Optional)" 
                      aria-label="Your Email" 
                      suppressHydrationWarning
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5} 
                      aria-label="Your Message" 
                      suppressHydrationWarning
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-yellow-700 text-primary-foreground hover:opacity-90 transition-opacity" suppressHydrationWarning>Send Message</Button>
                </form>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
