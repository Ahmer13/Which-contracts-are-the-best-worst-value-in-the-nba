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
  // Top salary players
  { id: '1', name: 'Stephen Curry', team: 'GSW', position: 'PG', salary: 59606817, salaryRank: 1, ...generatePerformanceMetrics(59606817, 'PG') },
  { id: '2', name: 'Joel Embiid', team: 'PHI', position: 'C', salary: 55224526, salaryRank: 2, ...generatePerformanceMetrics(55224526, 'C') },
  { id: '3', name: 'Nikola Jokic', team: 'DEN', position: 'C', salary: 55224526, ...generatePerformanceMetrics(55224526, 'C') },
  { id: '4', name: 'Giannis Antetokounmpo', team: 'MIL', position: 'PF', salary: 54126450, salaryRank: 4, ...generatePerformanceMetrics(54126450, 'PF') },
  { id: '5', name: 'Jimmy Butler', team: 'GSW', position: 'SF', salary: 54126450, ...generatePerformanceMetrics(54126450, 'SF') },
  { id: '6', name: 'Anthony Davis', team: 'DAL', position: 'C', salary: 54126450, ...generatePerformanceMetrics(54126450, 'C') },
  { id: '7', name: 'Jayson Tatum', team: 'BOS', position: 'PF', salary: 54126450, ...generatePerformanceMetrics(54126450, 'PF') },
  { id: '8', name: 'Kevin Durant', team: 'HOU', position: 'SF', salary: 53282608, salaryRank: 8, ...generatePerformanceMetrics(53282608, 'SF') },
  { id: '9', name: 'Devin Booker', team: 'PHX', position: 'SG', salary: 53142264, salaryRank: 9, ...generatePerformanceMetrics(53142264, 'SG') },
  { id: '10', name: 'Jaylen Brown', team: 'BOS', position: 'SF', salary: 53142264, ...generatePerformanceMetrics(53142264, 'SF') },
  { id: '11', name: 'Karl-Anthony Towns', team: 'NYK', position: 'C', salary: 53142264, ...generatePerformanceMetrics(53142264, 'C') },
  { id: '12', name: 'LeBron James', team: 'LAL', position: 'PF', salary: 52627153, salaryRank: 12, ...generatePerformanceMetrics(52627153, 'PF') },
  { id: '13', name: 'Paul George', team: 'PHI', position: 'SG', salary: 51666090, salaryRank: 13, ...generatePerformanceMetrics(51666090, 'SG') },
  { id: '14', name: 'Kawhi Leonard', team: 'LAC', position: 'SF', salary: 50000000, salaryRank: 14, ...generatePerformanceMetrics(50000000, 'SF') },
  { id: '15', name: 'Cade Cunningham', team: 'DET', position: 'PG', salary: 46394100, salaryRank: 15, ...generatePerformanceMetrics(46394100, 'PG') },
  { id: '16', name: 'Lauri Markkanen', team: 'UTA', position: 'PF', salary: 46394100, ...generatePerformanceMetrics(46394100, 'PF') },
  { id: '17', name: 'Donovan Mitchell', team: 'CLE', position: 'SG', salary: 46394100, ...generatePerformanceMetrics(46394100, 'SG') },
  { id: '18', name: 'Evan Mobley', team: 'CLE', position: 'PF', salary: 46394100, ...generatePerformanceMetrics(46394100, 'PF') },
  { id: '19', name: 'Jamal Murray', team: 'DEN', position: 'PG', salary: 46394100, ...generatePerformanceMetrics(46394100, 'PG') },
  { id: '20', name: 'Luka Doncic', team: 'LAL', position: 'PG', salary: 45999660, salaryRank: 20, ...generatePerformanceMetrics(45999660, 'PG') },
  { id: '21', name: 'Zach LaVine', team: 'SAC', position: 'SG', salary: 45999660, ...generatePerformanceMetrics(45999660, 'SG') },
  { id: '22', name: 'Trae Young', team: 'ATL', position: 'PG', salary: 45999660, ...generatePerformanceMetrics(45999660, 'PG') },
  { id: '23', name: 'Anthony Edwards', team: 'MIN', position: 'SG', salary: 45550512, salaryRank: 23, ...generatePerformanceMetrics(45550512, 'SG') },
  { id: '24', name: 'Tyrese Haliburton', team: 'IND', position: 'PG', salary: 45550512, ...generatePerformanceMetrics(45550512, 'PG') },
  { id: '25', name: 'Pascal Siakam', team: 'IND', position: 'PF', salary: 45550512, ...generatePerformanceMetrics(45550512, 'PF') },
  { id: '26', name: 'Domantas Sabonis', team: 'SAC', position: 'PF', salary: 42336000, salaryRank: 26, ...generatePerformanceMetrics(42336000, 'PF') },
  { id: '27', name: 'OG Anunoby', team: 'NYK', position: 'SF', salary: 39568966, salaryRank: 27, ...generatePerformanceMetrics(39568966, 'SF') },
  { id: '28', name: 'Darius Garland', team: 'CLE', position: 'PG', salary: 39446090, salaryRank: 28, ...generatePerformanceMetrics(39446090, 'PG') },
  { id: '29', name: 'Ja Morant', team: 'MEM', position: 'PG', salary: 39446090, ...generatePerformanceMetrics(39446090, 'PG') },
  { id: '30', name: 'Zion Williamson', team: 'NOP', position: 'PF', salary: 39446090, ...generatePerformanceMetrics(39446090, 'PF') },
  { id: '31', name: 'James Harden', team: 'LAC', position: 'SG', salary: 39182693, salaryRank: 31, ...generatePerformanceMetrics(39182693, 'SG') },
  { id: '32', name: 'Scottie Barnes', team: 'TOR', position: 'PF', salary: 38661750, salaryRank: 32, ...generatePerformanceMetrics(38661750, 'PF') },
  { id: '33', name: 'Franz Wagner', team: 'ORL', position: 'SF', salary: 38661750, ...generatePerformanceMetrics(38661750, 'SF') },
  { id: '34', name: 'Shai Gilgeous-Alexander', team: 'OKC', position: 'PG', salary: 38333050, salaryRank: 34, ...generatePerformanceMetrics(38333050, 'PG') },
  { id: '35', name: 'Michael Porter Jr.', team: 'BKN', position: 'SF', salary: 38333050, ...generatePerformanceMetrics(38333050, 'SF') },
  { id: '36', name: 'Brandon Ingram', team: 'TOR', position: 'SF', salary: 38095238, salaryRank: 36, ...generatePerformanceMetrics(38095238, 'SF') },
  { id: '37', name: 'LaMelo Ball', team: 'CHA', position: 'PG', salary: 37958760, salaryRank: 37, ...generatePerformanceMetrics(37958760, 'PG') },
  { id: '38', name: 'Tyrese Maxey', team: 'PHI', position: 'PG', salary: 37958760, ...generatePerformanceMetrics(37958760, 'PG') },
  { id: '39', name: 'Bam Adebayo', team: 'MIA', position: 'C', salary: 37096620, salaryRank: 39, ...generatePerformanceMetrics(37096620, 'C') },
  { id: '40', name: 'De\'Aaron Fox', team: 'SAS', position: 'PG', salary: 37096620, ...generatePerformanceMetrics(37096620, 'PG') },
  { id: '41', name: 'Desmond Bane', team: 'ORL', position: 'SG', salary: 36725670, salaryRank: 41, ...generatePerformanceMetrics(36725670, 'SG') },
  { id: '42', name: 'Kyrie Irving', team: 'DAL', position: 'PG', salary: 36566002, salaryRank: 42, ...generatePerformanceMetrics(36566002, 'PG') },
  { id: '43', name: 'Rudy Gobert', team: 'MIN', position: 'C', salary: 35000000, salaryRank: 43, ...generatePerformanceMetrics(35000000, 'C') },
  { id: '44', name: 'Jaren Jackson Jr.', team: 'MEM', position: 'PF', salary: 35000000, ...generatePerformanceMetrics(35000000, 'PF') },
  { id: '45', name: 'Jalen Suggs', team: 'ORL', position: 'SG', salary: 35000000, ...generatePerformanceMetrics(35000000, 'SG') },
  { id: '46', name: 'Jalen Brunson', team: 'NYK', position: 'PG', salary: 34944001, salaryRank: 46, ...generatePerformanceMetrics(34944001, 'PG') },
  { id: '47', name: 'Alperen Sengun', team: 'HOU', position: 'C', salary: 33944954, salaryRank: 47, ...generatePerformanceMetrics(33944954, 'C') },
  { id: '48', name: 'Jalen Green', team: 'PHX', position: 'SG', salary: 33333333, salaryRank: 48, ...generatePerformanceMetrics(33333333, 'SG') },
  { id: '49', name: 'Khris Middleton', team: 'WAS', position: 'SF', salary: 33296296, salaryRank: 49, ...generatePerformanceMetrics(33296296, 'SF') },
  { id: '50', name: 'Immanuel Quickley', team: 'TOR', position: 'PG', salary: 32500000, salaryRank: 50, ...generatePerformanceMetrics(32500000, 'PG') },
  { id: '51', name: 'Jrue Holiday', team: 'POR', position: 'PG', salary: 32400000, salaryRank: 51, ...generatePerformanceMetrics(32400000, 'PG') },
  { id: '52', name: 'Jerami Grant', team: 'POR', position: 'PF', salary: 32000001, salaryRank: 52, ...generatePerformanceMetrics(32000001, 'PF') },
  { id: '53', name: 'Jordan Poole', team: 'NOP', position: 'SG', salary: 31848215, salaryRank: 53, ...generatePerformanceMetrics(31848215, 'SG') },
  { id: '54', name: 'Tyler Herro', team: 'MIA', position: 'SG', salary: 31000000, salaryRank: 54, ...generatePerformanceMetrics(31000000, 'SG') },
  { id: '55', name: 'Julius Randle', team: 'MIN', position: 'PF', salary: 30864198, salaryRank: 55, ...generatePerformanceMetrics(30864198, 'PF') },
  { id: '56', name: 'Kristaps Porzingis', team: 'ATL', position: 'PF', salary: 30731707, salaryRank: 56, ...generatePerformanceMetrics(30731707, 'PF') },
  { id: '57', name: 'C.J. McCollum', team: 'WAS', position: 'SG', salary: 30666666, salaryRank: 57, ...generatePerformanceMetrics(30666666, 'SG') },
  { id: '58', name: 'Jalen Johnson', team: 'ATL', position: 'SF', salary: 30000000, salaryRank: 58, ...generatePerformanceMetrics(30000000, 'SF') },
  { id: '59', name: 'Isaiah Hartenstein', team: 'OKC', position: 'C', salary: 28500000, salaryRank: 59, ...generatePerformanceMetrics(28500000, 'C') },
  { id: '60', name: 'Andrew Wiggins', team: 'MIA', position: 'SF', salary: 28223215, salaryRank: 60, ...generatePerformanceMetrics(28223215, 'SF') },
  
  // More players to ensure all teams represented
  { id: '61', name: 'Corey Kispert', team: 'WAS', position: 'SF', salary: 13975000, salaryRank: 123, ...generatePerformanceMetrics(13975000, 'SF') },
  { id: '62', name: 'Alex Sarr', team: 'WAS', position: 'PF', salary: 11808240, salaryRank: 144, ...generatePerformanceMetrics(11808240, 'PF') },
  { id: '63', name: 'Tre Johnson', team: 'WAS', position: 'SG', salary: 8237640, salaryRank: 190, ...generatePerformanceMetrics(8237640, 'SG') },
  { id: '64', name: 'Cam Whitmore', team: 'WAS', position: 'SF', salary: 3539760, salaryRank: 301, ...generatePerformanceMetrics(3539760, 'SF') },
  { id: '65', name: 'Will Riley', team: 'WAS', position: 'SF', salary: 3512520, salaryRank: 302, ...generatePerformanceMetrics(3512520, 'SF') },
  { id: '66', name: 'Bilal Coulibaly', team: 'WAS', position: 'SF', salary: 7275600, salaryRank: 205, ...generatePerformanceMetrics(7275600, 'SF') },
  { id: '67', name: 'Bub Carrington', team: 'WAS', position: 'PG', salary: 4677600, salaryRank: 263, ...generatePerformanceMetrics(4677600, 'PG') },
  { id: '68', name: 'Dillon Jones', team: 'WAS', position: 'SF', salary: 2753280, salaryRank: 337, ...generatePerformanceMetrics(2753280, 'SF') },
  { id: '69', name: 'AJ Johnson', team: 'WAS', position: 'PG', salary: 3090480, salaryRank: 316, ...generatePerformanceMetrics(3090480, 'PG') },
  { id: '70', name: 'Marvin Bagley III', team: 'WAS', position: 'PF', salary: 3080921, salaryRank: 317, ...generatePerformanceMetrics(3080921, 'PF') },
  { id: '71', name: 'Kyshawn George', team: 'WAS', position: 'SG', salary: 2966760, salaryRank: 327, ...generatePerformanceMetrics(2966760, 'SG') },
  { id: '72', name: 'Malaki Branham', team: 'WAS', position: 'SG', salary: 4962033, salaryRank: 257, ...generatePerformanceMetrics(4962033, 'SG') },
  { id: '73', name: 'Justin Champagnie', team: 'WAS', position: 'SF', salary: 2349578, salaryRank: 367, ...generatePerformanceMetrics(2349578, 'SF') },
  
  // Ensure we have all 30 teams - adding key players from remaining teams
  { id: '74', name: 'Paolo Banchero', team: 'ORL', position: 'PF', salary: 15334769, salaryRank: 110, ...generatePerformanceMetrics(15334769, 'PF') },
  { id: '75', name: 'Victor Wembanyama', team: 'SAS', position: 'C', salary: 13376880, salaryRank: 132, ...generatePerformanceMetrics(13376880, 'C') },
  { id: '76', name: 'Chet Holmgren', team: 'OKC', position: 'C', salary: 13731368, salaryRank: 127, ...generatePerformanceMetrics(13731368, 'C') },
  { id: '77', name: 'Derrick White', team: 'BOS', position: 'PG', salary: 26350000, salaryRank: 68, ...generatePerformanceMetrics(26350000, 'PG') },
  { id: '78', name: 'Jalen Williams', team: 'OKC', position: 'SF', salary: 6580997, salaryRank: 217, ...generatePerformanceMetrics(6580997, 'SF') },
  { id: '79', name: 'Nikola Vucevic', team: 'CHI', position: 'C', salary: 21481481, salaryRank: 82, ...generatePerformanceMetrics(21481481, 'C') },
  { id: '80', name: 'Coby White', team: 'CHI', position: 'PG', salary: 12888889, salaryRank: 136, ...generatePerformanceMetrics(12888889, 'PG') },
].map(player => ({
  ...player,
  // Ensure realistic age ranges based on player career stage
  age: player.name === 'LeBron James' ? 39 : 
       player.name === 'Stephen Curry' ? 35 :
       player.name === 'Victor Wembanyama' ? 20 :
       player.name === 'Chet Holmgren' ? 22 :
       player.name === 'Paolo Banchero' ? 21 :
       player.name === 'Alex Sarr' ? 19 :
       player.age || Math.floor(Math.random() * 10) + 24 // Random age 24-33 for others
}));