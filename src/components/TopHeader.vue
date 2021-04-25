<template>
  <div>
    Logged in? 
    <div v-if="loggedIn">
      <span v-if="loggedIn"> Yes</span>
      <div class="signout-button">
        <b-button @click.prevent="signOut">
          Sign out
        </b-button>
      </div>
    </div>
    <span v-else> No</span>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: "TopHeader",
  created() {
    firebase.auth().onAuthStateChanged(user=> {
      if (user) this.loggedIn = true
      else this.loggedIn = false
    })
  },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data)
        this.$router.replace({name:'login'})
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.signout-button {
  max-width: 100px;
  margin: 0 auto;
}
</style>