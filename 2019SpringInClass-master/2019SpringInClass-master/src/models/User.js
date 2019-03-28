// detailed information about users/firends
import { api } from "./api";

export async function GetFriends(){
  const x = await api("users")
  .then(x=> console.log(x));
  // x will be wrapped within a promise
  return x;
}