<template>
  <div class="form-container">
    <div v-if="error" class="error">{{error.message}}</div>
    <div class="form">
      <form @submit.prevent="pressed">
      {{ $t('login')}}
      <hr class="smooth-hr"/>
      <div class="email input-container">
        <!-- <input type="email" v-model="email" placeholder="email"> -->
        <!-- <input type="password" v-model="password" placeholder="password"> -->
        <label for="email-input" class="float-left">Email address</label>
        <b-form-input id="email-input" type="email" v-model="email" placeholder="Enter your name" oninvalid="this.setCustomValidity('Invalid Email')" required></b-form-input>
      </div>
      <div class="password input-container mb-4">
        <label for="password-input" class="float-left">Password</label>
        <span>
          <b-form-input id="password-input" type="password" v-model="password" placeholder="Enter your password" oninvalid="this.setCustomValidity('Invalid Password')" required></b-form-input>
          <span class="password-toggle">
            <b-button variant="link" class="p-0 m-0">Show</b-button>
          </span>
        </span>
      </div>
      
      <b-button variant="primary" type="submit" size="lg" @click.prevent="pressed">Submit</b-button>
    </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email:'',
      password:'',
      error:'',
      langs:['en', 'th']
    }
  },
  methods: {
    async pressed() {
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(response)
        this.$router.replace({name:'secret'})
      } catch (error) {
        console.log(error)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .password {
    position: relative;
  }
  .password-toggle {
    position: absolute;
    top: 0;
    right:0px;
    font-size: 1rem;
    text-decoration: underline;
  }
</style>