/*You have an array of all supported browsers 
and another array of temporarily blocked browsers. 
Write a function that returns the runnable browsers, the blocked browsers,
and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.*/

function browserPlan(allBrowsers, blockedBrowsers) {
  let runnable = [];
  let blocked = [];

  for (let browser of allBrowsers) {
    if (blockedBrowsers.includes(browser)) {
      blocked.push(browser);
    } else {
      runnable.push(browser);
    }
  }

  let plan = "Run on: " + runnable.join(", ") + " | Skip: " + blocked.join(", ");

  return {
    runnableBrowsers: runnable,
    blockedBrowsers: blocked,
    executionPlan: plan
  };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const result = browserPlan(allBrowsers, blockedBrowsers);
console.log(result);

