// detailed information about users/firends
import { api } from "./api";

export function GetFriends(){
  api("users")
  .then(x=> console.log(x));
}