import { Player } from '@/types/nba';

// Helper function to generate realistic performance metrics based on salary
const generatePerformanceMetrics = (salary: number, position: string) => {
  // Base stats with some randomization and salary correlation
  const salaryFactor = Math.log(salary / 1000000) / 4; // Log scale for more realistic distribution
  const randomFactor = 0.7 + Math.random() * 0.6; // 0.7 to 1.3 multiplier
  
  const baseStats = {
    'PG': { points: 15, assists: 7, rebounds: 4, per: 18, winShares: 6 },
    'SG': { points: 18, assists: 4, rebounds: 4, per: 17, winShares: 6 },
    'SF': { points: 16, assists: 4, rebounds: 6, per: 16, winShares: 7 },
    'PF': { points: 14, assists: 3, rebounds: 8, per: 17, winShares: 7 },
    'C': { points: 13, assists: 2, rebounds: 10, per: 18, winShares: 8 },
  };

  const stats = baseStats[position as keyof typeof baseStats] || baseStats['SF'];
  
  return {
    points: Math.round((stats.points + salaryFactor * 8) * randomFactor),
    assists: Math.round((stats.assists + salaryFactor * 2) * randomFactor),
    rebounds: Math.round((stats.rebounds + salaryFactor * 2) * randomFactor),
    per: Math.round((stats.per + salaryFactor * 5) * randomFactor * 10) / 10,
    winShares: Math.round((stats.winShares + salaryFactor * 4) * randomFactor * 10) / 10,
    age: 22 + Math.floor(Math.random() * 12), // Age 22-34
    gamesPlayed: 65 + Math.floor(Math.random() * 18), // 65-82 games
  };
};

export const playersData: Player[] = [
  {
    id: '1',
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG',
    salary: 59606817,
    salaryRank: 1,
    ...generatePerformanceMetrics(59606817, 'PG'),
  },
  {
    id: '2',
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'C',
    salary: 55224526,
    salaryRank: 2,
    ...generatePerformanceMetrics(55224526, 'C'),
  },
  {
    id: '3',
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'C',
    salary: 55224526,
    ...generatePerformanceMetrics(55224526, 'C'),
  },
  {
    id: '4',
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF',
    salary: 54126450,
    salaryRank: 4,
    ...generatePerformanceMetrics(54126450, 'PF'),
  },
  {
    id: '5',
    name: 'Jimmy Butler',
    team: 'GSW',
    position: 'SF',
    salary: 54126450,
    ...generatePerformanceMetrics(54126450, 'SF'),
  },
  {
    id: '6',
    name: 'Anthony Davis',
    team: 'DAL',
    position: 'C',
    salary: 54126450,
    ...generatePerformanceMetrics(54126450, 'C'),
  },
  {
    id: '7',
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'PF',
    salary: 54126450,
    ...generatePerformanceMetrics(54126450, 'PF'),
  },
  {
    id: '8',
    name: 'Kevin Durant',
    team: 'HOU',
    position: 'SF',
    salary: 53282608,
    salaryRank: 8,
    ...generatePerformanceMetrics(53282608, 'SF'),
  },
  {
    id: '9',
    name: 'Devin Booker',
    team: 'PHX',
    position: 'SG',
    salary: 53142264,
    salaryRank: 9,
    ...generatePerformanceMetrics(53142264, 'SG'),
  },
  {
    id: '10',
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SF',
    salary: 53142264,
    ...generatePerformanceMetrics(53142264, 'SF'),
  },
  {
    id: '11',
    name: 'Karl-Anthony Towns',
    team: 'NYK',
    position: 'C',
    salary: 53142264,
    ...generatePerformanceMetrics(53142264, 'C'),
  },
  {
    id: '12',
    name: 'LeBron James',
    team: 'LAL',
    position: 'PF',
    salary: 52627153,
    salaryRank: 12,
    ...generatePerformanceMetrics(52627153, 'PF'),
  },
  {
    id: '13',
    name: 'Paul George',
    team: 'PHI',
    position: 'SG',
    salary: 51666090,
    salaryRank: 13,
    ...generatePerformanceMetrics(51666090, 'SG'),
  },
  {
    id: '14',
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SF',
    salary: 50000000,
    salaryRank: 14,
    ...generatePerformanceMetrics(50000000, 'SF'),
  },
  {
    id: '15',
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG',
    salary: 46394100,
    salaryRank: 15,
    ...generatePerformanceMetrics(46394100, 'PG'),
  },
  {
    id: '16',
    name: 'Luka Doncic',
    team: 'LAL',
    position: 'PG',
    salary: 45999660,
    salaryRank: 20,
    ...generatePerformanceMetrics(45999660, 'PG'),
  },
  {
    id: '17',
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG',
    salary: 45550512,
    salaryRank: 23,
    ...generatePerformanceMetrics(45550512, 'SG'),
  },
  {
    id: '18',
    name: 'Shai Gilgeous-Alexander',
    team: 'OKC',
    position: 'PG',
    salary: 38333050,
    salaryRank: 34,
    ...generatePerformanceMetrics(38333050, 'PG'),
  },
  {
    id: '19',
    name: 'Jalen Brunson',
    team: 'NYK',
    position: 'PG',
    salary: 34944001,
    salaryRank: 46,
    ...generatePerformanceMetrics(34944001, 'PG'),
  },
  {
    id: '20',
    name: 'Victor Wembanyama',
    team: 'SAS',
    position: 'C',
    salary: 13376880,
    salaryRank: 132,
    ...generatePerformanceMetrics(13376880, 'C'),
  },
  {
    id: '21',
    name: 'Chet Holmgren',
    team: 'OKC',
    position: 'C',
    salary: 13731368,
    salaryRank: 127,
    ...generatePerformanceMetrics(13731368, 'C'),
  },
  {
    id: '22',
    name: 'Paolo Banchero',
    team: 'ORL',
    position: 'PF',
    salary: 15334769,
    salaryRank: 110,
    ...generatePerformanceMetrics(15334769, 'PF'),
  },
  // Add some value picks
  {
    id: '23',
    name: 'Alperen Sengun',
    team: 'HOU',
    position: 'C',
    salary: 33944954,
    salaryRank: 47,
    ...generatePerformanceMetrics(33944954, 'C'),
  },
  {
    id: '24',
    name: 'Jalen Williams',
    team: 'OKC',
    position: 'SF',
    salary: 6580997,
    salaryRank: 217,
    ...generatePerformanceMetrics(6580997, 'SF'),
  },
  {
    id: '25',
    name: 'Derrick White',
    team: 'BOS',
    position: 'PG',
    salary: 26350000,
    salaryRank: 68,
    ...generatePerformanceMetrics(26350000, 'PG'),
  },
].map(player => ({
  ...player,
  // Ensure realistic age ranges based on player career stage
  age: player.name === 'LeBron James' ? 39 : 
       player.name === 'Stephen Curry' ? 35 :
       player.name === 'Victor Wembanyama' ? 20 :
       player.name === 'Chet Holmgren' ? 22 :
       player.age || 26
}));