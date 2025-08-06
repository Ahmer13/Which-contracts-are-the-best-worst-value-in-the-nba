import { useState, useMemo } from 'react';
import { Player, FilterOptions, KPIData } from '@/types/nba';
import { playersData } from '@/data/players';
import { KPICard } from '@/components/dashboard/KPICard';
import { ValueScatterPlot } from '@/components/dashboard/ValueScatterPlot';
import { ValueBarChart } from '@/components/dashboard/ValueBarChart';
import { DashboardFilters } from '@/components/dashboard/DashboardFilters';

export default function Dashboard() {
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState('all');

  // Filter data based on selections
  const filteredPlayers = useMemo(() => {
    return playersData.filter(player => {
      const teamMatch = selectedTeam === 'all' || player.team === selectedTeam;
      const positionMatch = selectedPosition === 'all' || player.position === selectedPosition;
      return teamMatch && positionMatch;
    });
  }, [selectedTeam, selectedPosition]);

  // Calculate filter options
  const filterOptions: FilterOptions = useMemo(() => {
    const teams = [...new Set(playersData.map(p => p.team))].sort();
    const positions = [...new Set(playersData.map(p => p.position))].sort();
    const ages = playersData.map(p => p.age);
    
    return {
      teams,
      positions,
      ageRange: [Math.min(...ages), Math.max(...ages)],
    };
  }, []);

  // Calculate KPIs
  const kpiData: KPIData = useMemo(() => {
    const playersWithValue = filteredPlayers.map(player => ({
      ...player,
      winSharesPerMillion: player.winShares / (player.salary / 1000000),
      pointsPerMillion: player.points / (player.salary / 1000000),
    }));

    const bestValuePlayer = playersWithValue.reduce((best, current) => 
      current.winSharesPerMillion > best.winSharesPerMillion ? current : best
    );

    const mostOverpaidPlayer = playersWithValue.reduce((worst, current) => 
      current.winSharesPerMillion < worst.winSharesPerMillion ? current : worst
    );

    // Calculate team efficiency
    const teamEfficiency = filteredPlayers.reduce((acc, player) => {
      const team = player.team;
      if (!acc[team]) {
        acc[team] = { totalWinShares: 0, totalSalary: 0 };
      }
      acc[team].totalWinShares += player.winShares;
      acc[team].totalSalary += player.salary;
      return acc;
    }, {} as Record<string, { totalWinShares: number; totalSalary: number }>);

    const bestValueTeam = Object.entries(teamEfficiency)
      .map(([team, data]) => ({
        team,
        efficiency: data.totalWinShares / (data.totalSalary / 1000000),
      }))
      .reduce((best, current) => current.efficiency > best.efficiency ? current : best).team;

    const avgSalaryPerWinShare = filteredPlayers.reduce((sum, p) => sum + p.salary, 0) / 
                                filteredPlayers.reduce((sum, p) => sum + p.winShares, 0);

    return {
      bestValuePlayer,
      mostOverpaidPlayer,
      bestValueTeam,
      avgSalaryPerWinShare,
    };
  }, [filteredPlayers]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-r from-card to-secondary/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-primary">
              <span className="text-primary-foreground font-bold text-xl">🏀</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">NBA Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Performance-to-salary analysis for the 2024-25 season
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <DashboardFilters
              filters={filterOptions}
              onTeamChange={setSelectedTeam}
              onPositionChange={setSelectedPosition}
              onAgeRangeChange={() => {}} // TODO: Implement age range filter
              selectedTeam={selectedTeam}
              selectedPosition={selectedPosition}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <KPICard
                title="Best Value Player"
                value={kpiData.bestValuePlayer.name.split(' ').slice(-1)[0]}
                subtitle={`${(kpiData.bestValuePlayer.winShares / (kpiData.bestValuePlayer.salary / 1000000)).toFixed(2)} WS/$M`}
                variant="success"
              />
              <KPICard
                title="Most Overpaid"
                value={kpiData.mostOverpaidPlayer.name.split(' ').slice(-1)[0]}
                subtitle={`${(kpiData.mostOverpaidPlayer as any).winSharesPerMillion?.toFixed(2) || '0.00'} WS/$M`}
                variant="warning"
              />
              <KPICard
                title="Best Value Team"
                value={kpiData.bestValueTeam}
                subtitle="Highest team efficiency"
                variant="accent"
              />
              <KPICard
                title="Avg $/Win Share"
                value={`$${(kpiData.avgSalaryPerWinShare / 1000000).toFixed(1)}M`}
                subtitle="League average"
                variant="default"
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <ValueScatterPlot players={filteredPlayers} />
              <ValueBarChart players={filteredPlayers} />
            </div>

            {/* Player Table Preview */}
            <div className="bg-gradient-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Filtered Players ({filteredPlayers.length})
              </h3>
              <div className="text-sm text-muted-foreground">
                Showing {selectedTeam === 'all' ? 'all teams' : selectedTeam} • {' '}
                {selectedPosition === 'all' ? 'all positions' : selectedPosition}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}