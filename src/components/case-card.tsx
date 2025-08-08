'use client';

import type { Case } from '@/lib/data';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface CaseCardProps {
  caseData: Case;
}

export function CaseCard({ caseData }: CaseCardProps) {
  const { id, name, condition, raised, goal, location, imageUrl, dataAiHint } = caseData;
  const progress = Math.round((raised / goal) * 100);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      {imageUrl && (
        <div className="relative aspect-video">
            <Image src={imageUrl} alt={condition} fill className="object-cover" data-ai-hint={dataAiHint}/>
        </div>
      )}
      <CardHeader className="p-4">
        <Badge variant="secondary" className="mb-2 w-fit">{location}</Badge>
        <CardTitle className="font-headline text-xl">{condition}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <p className="text-muted-foreground text-sm mb-4">For {name}</p>
        <div>
          <Progress value={progress} className="h-2 mb-2" />
          <div className="flex justify-between text-sm">
            <span className="font-bold text-primary">
              ${raised.toLocaleString()} raised
            </span>
            <span className="text-muted-foreground">
              of ${goal.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link href={`/request/${id}`}>View & Donate</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
