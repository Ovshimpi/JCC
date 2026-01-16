"use client";

import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function CallButton({ phoneNumber }: { phoneNumber: string }) {
  const callLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

  return (
    <Link
      href={callLink}
      className="fixed bottom-28 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </Link>
  );
}
