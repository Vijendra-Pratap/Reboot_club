import { Award, Gem, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const rewards = [
  {
    icon: Medal,
    title: 'Bronze Heart',
    description: 'Awarded to donors who make their first contribution, symbolizing the start of their journey with us.',
  },
  {
    icon: Award,
    title: 'Silver Supporter',
    description: 'For our recurring donors who consistently support our causes, showing unwavering commitment.',
  },
  {
    icon: Gem,
    title: 'Golden Champion',
    description: 'The highest honor for donors who have made a significant impact through their generous contributions.',
  },
];

export function DonorRewards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Rewarding Our Heroes
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
            We cherish our dedicated donors. Our rewards program is a small way of saying thank you for your incredible support.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {rewards.map((reward, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="p-4 bg-accent/20 rounded-full mb-4 inline-block">
                  <reward.icon className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="font-headline text-2xl">{reward.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground">{reward.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
