'use client';

import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

interface SuccessRateChartProps {
  rate: number;
}

export function SuccessRateChart({ rate }: SuccessRateChartProps) {
  const data = [
    { name: 'Success', value: rate },
    { name: 'Remaining', value: 100 - rate },
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--muted))'];

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={'70%'}
            outerRadius={'100%'}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-bold font-headline text-primary">
          {rate}%
        </span>
        <span className="text-sm text-muted-foreground mt-1">
          Success Rate
        </span>
      </div>
    </div>
  );
}
