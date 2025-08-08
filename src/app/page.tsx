import { CaseCard } from '@/components/case-card';
import { Button } from '@/components/ui/button';
import { cases } from '@/lib/data';
import { Filter } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Your Compassion, Their Lifeline
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    AidLink connects you with individuals in urgent need of medical assistance. Your contribution can change a life.
                  </p>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop"
                width="600"
                height="400"
                alt="Donation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="donation hands"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                  Current Medical Aid Requests
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Browse through active cases and find where you can help the most.
                </p>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter Cases
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {cases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseData={caseItem} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
