import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterOptions } from '@/types/nba';

interface DashboardFiltersProps {
  filters: FilterOptions;
  onTeamChange: (team: string) => void;
  onPositionChange: (position: string) => void;
  onAgeRangeChange: (range: [number, number]) => void;
  selectedTeam: string;
  selectedPosition: string;
}

export function DashboardFilters({
  filters,
  onTeamChange,
  onPositionChange,
  selectedTeam,
  selectedPosition,
}: DashboardFiltersProps) {
  return (
    <Card className="shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-foreground text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Team</label>
          <Select value={selectedTeam} onValueChange={onTeamChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Teams" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              {filters.teams.map(team => (
                <SelectItem key={team} value={team}>{team}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Position</label>
          <Select value={selectedPosition} onValueChange={onPositionChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Positions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              {filters.positions.map(position => (
                <SelectItem key={position} value={position}>{position}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="pt-2">
          <div className="text-sm text-muted-foreground mb-2">
            Quick Filters
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onPositionChange('PG')}
              className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Point Guards
            </button>
            <button
              onClick={() => onPositionChange('SG')}
              className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Shooting Guards
            </button>
            <button
              onClick={() => onPositionChange('SF')}
              className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Small Forwards
            </button>
            <button
              onClick={() => onPositionChange('PF')}
              className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Power Forwards
            </button>
            <button
              onClick={() => onPositionChange('C')}
              className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Centers
            </button>
            <button
              onClick={() => {
                onTeamChange('all');
                onPositionChange('all');
              }}
              className="px-3 py-1 text-xs rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}