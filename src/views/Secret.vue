<template>
  <div>
    Secret
    <h5 v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5>
  </div>
</template>

<script>
import firebase from "firebase/app"
import 'firebase/auth' 
import axios from 'axios'

export default {
  data() {
    return {
      secrets:""
    }
  },
  async mounted() {
    const token = await firebase.auth().currentUser.getIdToken()
    
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    console.log(config)
    this.secrets = await axios.get('http://localhost:3000/characters', config)
    this.secrets = this.secrets.data
  }
}
</script>

<style>

</style>