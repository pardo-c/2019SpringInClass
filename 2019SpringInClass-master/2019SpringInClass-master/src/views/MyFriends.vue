<template>
<div>
  <h1> v-if="Globals.user"{{Globals.user.name}}My Friends Page</h1>
    <ul>
        <li v-for="friend in friends" :key="friend.id"> {{friend.FirstName}} </li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
    </ul>
</div>
</template>

<!--script is controller. -->
<script>
// {} surround globals because it is not a default object: it is const
import { Globals } from "@/models/api";
import { } from "../models/users.js";

GetFriends();

// use globals as local variable
export default {
  // data should be a function that returns an object
  data: () => ({
    Globals: Globals,
    // friends array
    friends: []
  }),
  async mounted() {
    this.friends = await GetFriends();
  }

}
</script>

<style>

</style>
