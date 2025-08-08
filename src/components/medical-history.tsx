'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const historicalData = [
  { year: '1980', cost: 100 },
  { year: '1990', cost: 256 },
  { year: '2000', cost: 580 },
  { year: '2010', cost: 1250 },
  { year: '2020', cost: 2600 },
  { year: 'Today', cost: 3500 },
];

export function MedicalHistory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              The Widening Gap in Healthcare
            </h2>
            <p className="text-lg text-muted-foreground">
              For centuries, communities have supported those unable to afford care. Today, that need is greater than ever. As medical costs have soared, the financial burden on individuals and families has become a global crisis.
            </p>
            <p className="text-lg text-muted-foreground">
              This chart illustrates the dramatic rise in the average cost of a significant medical procedure over the past few decades. AidLink exists to bridge this gap, connecting those in need with a compassionate global community. Your donation is a vital part of this modern-day legacy of care.
            </p>
          </div>
           <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline">The Rising Cost of Medical Care</CardTitle>
                    <CardDescription>Average cost of a major procedure, indexed to 1980.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={historicalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis 
                            dataKey="year" 
                            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                        />
                        <YAxis 
                            tickFormatter={(value) => `$${value}`}
                            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                        />
                        <Tooltip
                            cursor={{ fill: 'hsl(var(--accent))' }}
                            contentStyle={{ 
                                background: 'hsl(var(--background))',
                                border: '1px solid hsl(var(--border))',
                                color: 'hsl(var(--foreground))'
                            }}
                        />
                        <Legend wrapperStyle={{ color: 'hsl(var(--muted-foreground))' }} />
                        <Line type="monotone" dataKey="cost" name="Indexed Cost" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
