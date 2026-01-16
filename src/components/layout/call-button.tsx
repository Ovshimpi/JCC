"use client";

import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function CallButton({ phoneNumber }: { phoneNumber: string }) {
  const callLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

  return (
    <Link
      href={callLink}
      className="fixed bottom-24 right-8 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
      aria-label="Call us"
    >
      <Phone className="h-8 w-8" />
    </Link>
  );
}
