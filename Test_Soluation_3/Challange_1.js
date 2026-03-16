/*You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`,
 where status can be `"passed"`, `"failed"`, or `"skipped"`. 
 Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, 
 and a comma-separated list of failed step names.*/
function summarizeSteps(steps) {
  let passed = 0, failed = 0, skipped = 0, totalDuration = 0;
  let failedNames = [];

  steps.forEach(step => {
    totalDuration += step.durationMs;

    if (step.status === "passed") passed++;
    else if (step.status === "failed") {
      failed++;
      failedNames.push(step.name);
    }
    else if (step.status === "skipped") skipped++;
  });

  console.log("=== Playwright Step Summary ===");
  console.log(`Total steps   : ${steps.length}`);
  console.log(`Passed        : ${passed}`);
  console.log(`Failed        : ${failed}`);
  console.log(`Skipped       : ${skipped}`);
  console.log(`Total duration: ${totalDuration} ms`);
  console.log(`Failed steps  : ${failedNames.join(", ")}`);
}

// Call the function
const stepResults = [
  { name: "Login", status: "passed", durationMs: 1200 },
  { name: "Add to Cart", status: "failed", durationMs: 800 },
  { name: "Checkout", status: "skipped", durationMs: 0 },
  { name: "Logout", status: "passed", durationMs: 500 },
];

summarizeSteps(stepResults);