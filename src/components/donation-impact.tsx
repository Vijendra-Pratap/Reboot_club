'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const donationData = [
  { category: 'Cancer Care', raised: 450000 },
  { category: 'Heart Surgery', raised: 320000 },
  { category: 'Accident Recovery', raised: 280000 },
  { category: 'Pediatrics', raised: 510000 },
  { category: 'Transplants', raised: 420000 },
  { category: 'Other', raised: 180000 },
];

export function DonationImpact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                    Our Collective Impact
                </h2>
                <p className="text-lg text-muted-foreground">
                    Every donation, no matter the size, contributes to a larger pool of funds that provides life-saving treatments and essential medical care to those in need. The graph illustrates how contributions from generous donors like you have been distributed across various critical medical categories.
                </p>
                <p className="text-lg text-muted-foreground">
                    This is a testament to the power of collective action. Together, we are making a tangible difference in the lives of many, offering hope and a chance for a healthier future.
                </p>
            </div>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline">Funds Raised by Category</CardTitle>
                    <CardDescription>Visualizing the community's impact.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={donationData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis 
                            dataKey="category" 
                            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                        />
                        <YAxis 
                            tickFormatter={(value) => `$${Number(value) / 1000}k`}
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
                        <Bar dataKey="raised" fill="hsl(var(--primary))" name="Amount Raised" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
