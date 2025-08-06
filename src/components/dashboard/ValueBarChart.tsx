import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Player } from '@/types/nba';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueBarChartProps {
  players: Player[];
}

export function ValueBarChart({ players }: ValueBarChartProps) {
  // Calculate value metrics and get top 10
  const valueData = players
    .map(player => ({
      name: player.name.split(' ').pop(), // Last name for cleaner display
      fullName: player.name,
      team: player.team,
      position: player.position,
      salary: player.salary,
      winSharesPerMillion: player.winShares / (player.salary / 1000000),
      pointsPerMillion: player.points / (player.salary / 1000000),
    }))
    .sort((a, b) => b.winSharesPerMillion - a.winSharesPerMillion)
    .slice(0, 10);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground">{data.fullName}</p>
          <p className="text-sm text-muted-foreground">{data.team} • {data.position}</p>
          <p className="text-sm">Salary: ${(data.salary / 1000000).toFixed(1)}M</p>
          <p className="text-sm font-medium text-primary">
            {data.winSharesPerMillion.toFixed(2)} Win Shares per $1M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-foreground">Top 10 Value Players</CardTitle>
        <p className="text-sm text-muted-foreground">
          Win Shares per $1M salary - Best bang for your buck
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={valueData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              label={{ 
                value: 'Win Shares / $1M', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="winSharesPerMillion" 
              fill="hsl(var(--accent))"
              radius={[4, 4, 0, 0]}
              className="transition-all duration-300 hover:opacity-80"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}