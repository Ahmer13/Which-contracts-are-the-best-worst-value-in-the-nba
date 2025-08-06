export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  salary: number;
  salaryRank?: number;
  // Performance metrics (mock data for demo)
  points: number;
  assists: number;
  rebounds: number;
  winShares: number;
  per: number;
  age: number;
  gamesPlayed: number;
}

export interface TeamColors {
  [key: string]: {
    primary: string;
    secondary: string;
  };
}

export interface FilterOptions {
  teams: string[];
  positions: string[];
  ageRange: [number, number];
}

export interface KPIData {
  bestValuePlayer: Player;
  mostOverpaidPlayer: Player;
  bestValueTeam: string;
  avgSalaryPerWinShare: number;
}