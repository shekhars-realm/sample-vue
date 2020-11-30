<template>
  <div class="container">
    <div class="round-box" style="width:250px !important">
      <div class="blue-background" > <h2> Dashboard Login </h2> </div>

      <!-- 2 way data binding for username & password -->
      <input v-model="state.username" id="username" type="text" placeholder="Enter User Name"/>

      <input v-model="state.password" id="password" type="password" placeholder="Enter Password"/>
      <br/>

      <!-- Diable button if username & password are blank -->
      <button :disabled="isDisabled" v-on:click="login">Login</button>
    </div>

  </div>

</template>

<script>
// Vue composition API
import { reactive, computed } from 'vue';
import { loginUser } from '../service/APIservice';
import router from '../router/index';

export default {
  name: "LoginBox",
  setup() {

    // Initialize username & password
    const state = reactive({
      username: '',
      password: '',
    })

    // computed function for user & password check,
    // Returns true if both have some values
    const isDisabled = computed(()=>{
      if(state.username === '' || state.password === '') {
        return true
      } else {
        return false
      }
    })

    function login() {
      loginUser(state.username, state.password).then(res=>{

        // Successfull login
        // Save token on localStorage
        // Redirects to dashboard with 1 as query params
        if(res.token){
          localStorage.setItem('token', res.token)
          router.push('/dashboard/1')
        }
      }, err=>{
        console.log(err);
        alert('Invalid username or password')
      })
    }


    return {
      state,
      isDisabled,
      login
    }
  }
}
</script>
