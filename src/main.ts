import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {i18n} from './i18n'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


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
//firebase

let app: any

firebase.auth().onAuthStateChanged(user=> {
  if (!app) {
    app =new Vue({
      router,
      store,
      i18n,
      render: h => h(App)
    }).$mount('#app')
  }
})


