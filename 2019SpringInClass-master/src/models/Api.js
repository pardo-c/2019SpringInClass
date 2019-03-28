const API_ROOT = process.env.API_ROOT || "http://localhost:3000/";

// global file: what goes into js file goes into vue file
export const Globals = {
  user: null
}

export function login() {
  Globals.user = { name: "Bernie" }
}

// make sure you get back what you ask for
export function api(url){
  // => if you do not have {} what ever the ret value of line of code is, is the value of the function
  // .json will create js object
  return fetch(API_ROOT + url, { mode: "no-cors"}).then(x=> x.json());
}