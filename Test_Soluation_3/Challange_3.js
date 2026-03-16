/*Given a raw Playwright error message string, 
write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, 
and prints a category. 
Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.*/

function categorizeError(rawMessage) {
  // 1. Trim spaces
  // 2. Convert to lowercase
  // 3. Collapse multiple spaces into one
  const normalized = rawMessage
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  // 4. Determine category
  let category;
  if (normalized.includes("timeout")) category = "TIMEOUT";
  else if (normalized.includes("locator")) category = "LOCATOR";
  else category = "GENERAL";

  // 5. Print results
  console.log("Normalized message:", normalized);
  console.log("Category:", category);
}


categorizeError("  ERROR: Timeout while waiting for  element   ");
categorizeError("Locator not found!  ");
categorizeError("Some unexpected error occurred");