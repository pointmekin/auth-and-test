<template>
  <div>
    <div id="nav">
      <router-link to="/">{{$t('home')}}</router-link> |
      <router-link to="/register">{{$t('register')}}</router-link> |
      <router-link to="/login">{{$t('login')}}</router-link> |
      <router-link to="/secret">{{$t('secret')}}</router-link> 
    </div>
  </div>
</template>

<script>
import {i18n} from '../i18n'

export default {
  name: "navbar",

}
</script>

<style>

</style>