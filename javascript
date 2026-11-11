// 1. Variables & Data Types
const appTitle = "Interactive JavaScript Starter";
let userScore = 0;
const targetScore = 5;

// 2. Arrays & Objects
const fruits = [
  { name: "Apple", points: 1 },
  { name: "Banana", points: 2 },
  { name: "Dragonfruit", points: 5 }
];

// 3. Functions & Arrow Functions
const calculateTotalPoints = (items) => {
  return items.reduce((total, item) => total + item.points, 0);
};

// 4. Conditional Logic
function checkProgress(score, goal) {
  if (score >= goal) {
    return `Goal reached! Final score: ${score}`;
  } else {
    const remaining = goal - score;
    return `Keep going! You need ${remaining} more point(s).`;
  }
}

// 5. Execution & Output
console.log(`--- ${appTitle} ---`);

// Iterate through the array
fruits.forEach((fruit) => {
  userScore += fruit.points;
  console.log(`Collected ${fruit.name} (+${fruit.points} pts). Current total: ${userScore}`);
});

console.log(checkProgress(userScore, targetScore));

// 6. DOM Manipulation Example (Browser context)
// Execute this block if running inside an HTML page with a <button id="btn"> and <p id="output">
if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    const output = document.getElementById("output");

    if (button && output) {
      button.addEventListener("click", () => {
        output.textContent = "Button clicked! JavaScript is working smoothly.";
      });
    }
  });
}
