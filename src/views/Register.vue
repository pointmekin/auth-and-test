<template>
  <div class="form-container">
    <div v-if="error" class="error">{{error.message}}</div>
    <div class="form">
      <form @submit.prevent="pressed">
      {{ $t('register')}}
      <hr class="smooth-hr"/>
      <div class="email input-container">
        <!-- <input type="email" v-model="email" placeholder="email"> -->
        <!-- <input type="password" v-model="password" placeholder="password"> -->
        <label for="email-input" class="float-left">Email address</label>
        <b-form-input id="email-input" type="email" v-model="email" placeholder="Enter your name" oninvalid="this.setCustomValidity('Invalid Email')" required></b-form-input>
      </div>
      <div class="password input-container">
        <label for="password-input" class="float-left">Password</label>
        <b-form-input id="password-input" type="password" v-model="password" placeholder="Enter your password" oninvalid="this.setCustomValidity('Invalid Password')" required></b-form-input>
      </div>
      <div class="language input-container">
      <label for="email-input" class="float-left">Language</label>
      <b-form-select v-model="$i18n.locale" v-on:change="toggleLang($event)">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </b-form-select>

      </div>
      <b-button variant="primary" type="submit" size="lg" @click.prevent="pressed">Submit</b-button>
    </form>
    </div>
  </div>
</template>

<script>
import {i18n, setLanguage} from '../i18n'
import firebase from "firebase/app"
import "firebase/auth";

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
        const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$router.replace({name:"secret"})
      } catch(err) {
        console.log(err)
        this.error = err.toString()
      }
    },
    toggleLang(lang) {
      console.log("Language: ",lang)
      setLanguage(lang)
    }
  },
  computed: {
    getLanguage() {
      return i18n.getLanguage();
    }
  }
}
</script>

<style lang="scss">
.error {
  color: red;
  font-size: 18px;
}

button {
  margin-top: 20px;
  width: 100%;
  height: 3rem;
  font-size: 100%;
}

.input-container {
  padding: 10px 0;
  margin: 0 auto;
  font-size: 21px;
  justify-content: center;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 350px 1fr;
  grid-template-areas: ". form .";
  padding: 15px;
}
.smooth-hr {
  border:none;
  height: 20px;
	height: 50px;
	margin-top: 0;
	border-bottom: 1px solid #d4d4d4;
	box-shadow: 0 20px 20px -20px #ececec;
  margin: -50px auto 10px; 
}


.form {
  grid-area: form;
}


</style>