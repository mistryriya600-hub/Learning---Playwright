let element = {
  isPresent: true,
  isDisplayed: true,
  isEnabled: false
};

let state;
let action;

if (element.isPresent === true && 
    element.isDisplayed === true && 
    element.isEnabled === true) {

  state = "READY";
  action = "Proceed with interaction (click/type).";

} else if (element.isPresent === true && 
           element.isDisplayed === true && 
           element.isEnabled === false) {

  state = "DISABLED";
  action = "Wait or check business logic (element disabled).";

} else if (element.isPresent === true && 
           element.isDisplayed === false) {

  state = "HIDDEN";
  action = "Scroll or wait until element becomes visible.";

} else if (element.isPresent === false) {

  state = "NOT FOUND";
  action = "Check locator or page load synchronization.";
}


let severity = 
  element.isPresent === false ? "CRITICAL" :
  (element.isDisplayed === false || element.isEnabled === false) ? "WARNING" :
  "OK";

console.log("===== UI ELEMENT VALIDATION REPORT =====");
console.log("State     :", state);
console.log("Severity  :", severity);
console.log("Action    :", action);