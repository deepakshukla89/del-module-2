const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//  1
const [players1, players2] = game.players;

// 2
const [gk, ...fieldPlayers] = players1;

// 3
const allPlayers = [...players1, ...players2];

//  4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//  5
const { team1, x: draw, team2 } = game.odds;

//  6
function printGoals(...players) {
  const totalGoals = players.filter((player) =>
    game.scored.includes(player)
  ).length;
  console.log(`${players} scored a total of ${totalGoals} goals.`);
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7
if (team1 < team2) {
  console.log(`${game.team1} is more likely to win.`);
} else if (team1 > team2) {
  console.log(`${game.team2} is more likely to win.`);
} else if (draw < team1 && draw < team2) {
  console.log("The match is likely to end in a draw.");
}
