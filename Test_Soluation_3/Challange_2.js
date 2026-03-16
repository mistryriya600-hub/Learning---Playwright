/*
Write a JavaScript function that receives two arrays: one with names and one with roles. 
Return a new array of user objects in the format `{ username, email, role }`. 
The username should be lowercase with spaces replaced by underscores, 
and the email should use the domain `@playwrightbatch.com`.*/
function createUsers(names, roles) {
  const domain = "@playwrightbatch.com";
  const users = [];

  for (let i = 0; i < names.length; i++) {
    const username = names[i].toLowerCase().replace(/ /g, "_");
    const email = username + domain;
    const role = roles[i] || "user"; // default role if missing
    users.push({ username, email, role });
  }

  return users;
}

const names = ["Alice Johnson", "Bob Smith", "Charlie"];
const roles = ["admin", "editor", "viewer"];

const users = createUsers(names, roles);
console.log(users);