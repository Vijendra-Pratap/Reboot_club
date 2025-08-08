'use client';

import type { Case } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CaseCardProps {
  caseData: Case;
}

export function CaseCard({ caseData }: CaseCardProps) {
  const { id, name, condition, raised, goal, imageUrl, dataAiHint, location } = caseData;
  const progress = Math.round((raised / goal) * 100);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={`Image for ${name}'s case`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={dataAiHint}
          />
        </div>
        <div className="p-4">
          <Badge variant="secondary" className="mb-2">{location}</Badge>
          <CardTitle className="font-headline text-xl">{condition}</CardTitle>
        </div>
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
