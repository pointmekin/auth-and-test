import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyDrw0f7PgGx7b_Trjmk_55BXlwPD6XeR94",
  authDomain: "vue-auth-and-test.firebaseapp.com",
  projectId: "vue-auth-and-test",
  storageBucket: "vue-auth-and-test.appspot.com",
  messagingSenderId: "578156039676",
  appId: "1:578156039676:web:11d879074c6ccab3073679",
  measurementId: "G-WY5WGMS2ZN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

