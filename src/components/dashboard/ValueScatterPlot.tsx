import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Player } from '@/types/nba';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueScatterPlotProps {
  players: Player[];
}

export function ValueScatterPlot({ players }: ValueScatterPlotProps) {
  const chartData = players.map(player => ({
    name: player.name,
    salary: player.salary / 1000000, // Convert to millions for readability
    winShares: player.winShares,
    per: player.per,
    team: player.team,
    position: player.position,
    valueRatio: player.winShares / (player.salary / 1000000), // Win shares per million
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">{data.team} • {data.position}</p>
          <p className="text-sm">Salary: ${data.salary.toFixed(1)}M</p>
          <p className="text-sm">Win Shares: {data.winShares}</p>
          <p className="text-sm">PER: {data.per}</p>
          <p className="text-sm font-medium text-primary">
            Value: {data.valueRatio.toFixed(2)} WS/$M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-foreground">Salary vs Performance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Win Shares vs Salary - Larger bubbles indicate higher PER
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              dataKey="salary" 
              name="Salary"
              domain={['dataMin', 'dataMax']}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'Salary (Millions)', position: 'insideBottom', offset: -10, style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
            />
            <YAxis 
              type="number" 
              dataKey="winShares" 
              name="Win Shares"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'Win Shares', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter 
              name="Players" 
              data={chartData} 
              fill="hsl(var(--primary))"
              opacity={0.7}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}