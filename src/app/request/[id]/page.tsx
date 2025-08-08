import { cases } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, MapPin, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function RequestDetailPage({ params }: { params: { id: string } }) {
  const caseData = cases.find((c) => c.id === params.id);

  if (!caseData) {
    notFound();
  }

  const progress = Math.round((caseData.raised / caseData.goal) * 100);

  return (
    <div className="container mx-auto max-w-5xl py-8 md:py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative w-full h-64 md:h-96">
                <Image
                    src={caseData.imageUrl}
                    alt={caseData.name}
                    fill
                    className="object-cover bg-muted"
                    data-ai-hint={caseData.dataAiHint}
                />
            </div>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">{caseData.condition}</Badge>
              <CardTitle className="text-3xl md:text-4xl font-headline">
                A Lifeline for {caseData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseData.story}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Donation Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <Progress value={progress} className="mb-4 h-3" />
                    <div className="space-y-2 text-lg">
                        <div className="flex justify-between">
                            <span className="font-semibold text-primary">${caseData.raised.toLocaleString()}</span>
                            <span className="text-muted-foreground">raised</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">${caseData.goal.toLocaleString()}</span>
                            <span className="text-muted-foreground">goal</span>
                        </div>
                    </div>
                     <p className="text-center text-muted-foreground mt-4 text-sm">{progress}% of goal reached.</p>
                </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-accent-foreground">Make a Difference</CardTitle>
                    <CardDescription>Your contribution can change a life today.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                        <DollarSign className="mr-2 h-5 w-5" />
                        Donate Now
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Case Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-accent"/>
                        <span>Condition: <strong>{caseData.condition}</strong></span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-accent"/>
                        <span>Location: <strong>{caseData.location}</strong></span>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
