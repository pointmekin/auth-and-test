<template>
  <div class="form-container">
    <div v-if="error" class="error">{{error.message}}</div>
    <div class="form">
      <form @submit.prevent="pressed">
      Register
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
      <b-button variant="primary" type="submit" size="lg">Submit</b-button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email:'',
      password:'',
      error:''
    }
  },
  methods: {
    pressed() {
      alert("Submitted")
    }
  }
}
</script>

<style lang="scss" scoped>
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