/*Write a higher-order function `runStep(stepName, actionFn)` 
that logs the start of a step, executes the callback, 
and returns an object in the format `{ stepName, passed, message }`. 
If the callback throws an error, catch it and return `passed: false` with the error message.*/

function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}`);

  try {
    actionFn(); // execute the callback
    return {
      stepName,
      passed: true,
      message: "Step completed successfully"
    };
  } catch (error) {
    return {
      stepName,
      passed: false,
      message: error.message
    };
  }
}

// Example usage:

const result1 = runStep("Login", () => {
  console.log("Performing login...");
  // no error here
});

const result2 = runStep("Checkout", () => {
  throw new Error("Button not found");
});

console.log(result1);
console.log(result2);

