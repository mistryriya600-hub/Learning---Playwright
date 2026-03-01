let maxRetries = 5;
let attempt = 0;
let success = false;

do {
  attempt++;
  let randomValue = Math.random();

  console.log(`Attempt ${attempt}: Random value = ${randomValue.toFixed(2)}`);

  if (randomValue > 0.6) {
    success = true;
    console.log("API Call SUCCESS");
  } else {
    console.log("API Call FAILED - Retrying...");
  }

} while (!success && attempt < maxRetries);

// Final Result
console.log("\n===== FINAL RESULT =====");

if (success) {
  console.log(`API succeeded after ${attempt} attempt(s).`);
} else {
  console.log(`API failed after ${maxRetries} attempts. Investigate network/backend issue.`);
}