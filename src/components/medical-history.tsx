'use client';

import Image from 'next/image';

export function MedicalHistory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              A Legacy of Care
            </h2>
            <p className="text-lg text-muted-foreground">
              For centuries, communities have come together to support those unable to afford medical care. From ancient traditions of charity to the first community-funded hospitals, the spirit of giving has always been a vital part of healthcare.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, despite incredible medical advancements, the financial burden of illness remains a global crisis. Millions are forced to choose between their health and their financial stability. AidLink continues this legacy of compassion, using technology to connect those in need with a global community of donors like you. Your donation is not just a gift; it's a part of a long and noble history of human kindness.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1581093452839-a781a5f64344?w=600&h=400&fit=crop"
            width="600"
            height="400"
            alt="Historical medical care"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            data-ai-hint="historic doctor"
          />
        </div>
      </div>
    </section>
  );
}
