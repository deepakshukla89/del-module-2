const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// 1
const events = [...new Set([...gameEvents.values()])];
console.log(events);

// 2
gameEvents.delete(64);

//  3
const allTime = 90;
const eventCount = gameEvents.size;
const averageInterval = allTime / eventCount;
console.log(`An event happened, on average, every ${averageInterval} minutes`);

// 4
gameEvents.forEach((event, minute) => {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ${event}`);
});
