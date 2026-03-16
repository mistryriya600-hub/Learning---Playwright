let testResults = ["pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Count results using a for loop
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passCount++;
  } else if (testResults[i] === "fail") {
    failCount++;
  } else if (testResults[i] === "skip") {
    skipCount++;
  }
}

let totalTests = testResults.length;
let passRate = ((passCount / totalTests) * 100).toFixed(2);

// Determine verdict
let verdict;

if (failCount === 0) {
  verdict = "READY FOR RELEASE";
} else if (failCount <= 2) {
  verdict = "REVIEW REQUIRED ";
} else {
  verdict = "BLOCK RELEASE ";
}

// Print QA Report
console.log("===== TEST EXECUTION REPORT =====");
console.log("Total Tests   :", totalTests);
console.log("Passed        :", passCount);
console.log("Failed        :", failCount);
console.log("Skipped       :", skipCount);
console.log("Pass Rate     :", passRate + "%");
console.log("Verdict       :", verdict);