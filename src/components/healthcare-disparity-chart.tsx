'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const disparityData = [
  { name: 'Critical Treatment', 'With Funding': 88, 'Without Funding': 25 },
];

export function HealthcareDisparityChart() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                        Bridging the Gap, Saving Lives
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Access to funding is often the single most critical factor in a patient's journey. The disparity in outcomes between those who can afford treatment and those who cannot is a stark reality. This chart illustrates the profound impact of financial support on patient success rates.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Your donation directly bridges this gap. It's more than just money; it's a lifeline that provides access to the best possible care, turning a story of struggle into one of hope and survival.
                    </p>
                </div>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline">The Power of a Donation</CardTitle>
                        <CardDescription>Patient success rate with vs. without funding.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={disparityData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis 
                                    type="number" 
                                    domain={[0, 100]}
                                    tickFormatter={(value) => `${value}%`}
                                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                                    tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                                />
                                <YAxis 
                                    type="category"
                                    dataKey="name"
                                    tick={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--accent))' }}
                                    formatter={(value) => `${value}%`}
                                    contentStyle={{ 
                                        background: 'hsl(var(--background))',
                                        border: '1px solid hsl(var(--border))',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                                <Legend wrapperStyle={{ color: 'hsl(var(--muted-foreground))' }} />
                                <Bar dataKey="With Funding" fill="hsl(var(--primary))" name="With Funding" radius={[0, 4, 4, 0]} barSize={50} />
                                <Bar dataKey="Without Funding" fill="hsl(var(--destructive))" name="Without Funding" radius={[0, 4, 4, 0]} barSize={50}/>
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
