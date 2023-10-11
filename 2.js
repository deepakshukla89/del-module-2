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
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2
let totalOdd = 0;
for (const key in game.odds) {
  if (key !== "x") {
    totalOdd += game.odds[key];
  }
}
const averageOdd = totalOdd / 2;
console.log(`Average odd: ${averageOdd}`);

// 3
for (const key in game.odds) {
  if (key === "x") {
    console.log(`Odd of draw: ${game.odds[key]}`);
  } else {
    console.log(`Odd of victory ${game[key]}: ${game.odds[key]}`);
  }
}

// 4
const scorers = {};
