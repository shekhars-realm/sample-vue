<template>
  <div >
    <h2>Phrase API Testing App</h2>
    <LoginBox/>
  </div>
</template>


<script>
import LoginBox from '../components/LoginBox'
import router from '../router/index';
import { onMounted } from 'vue';

export default {
  name: 'Login',
  components: { LoginBox },
  setup() {

    const checkForToken = ()=>{
      let flag = localStorage.getItem('token')
      if(flag)
      router.push('/dashboard/1')
    }

    // Check for token on mount
    // If token not available, display login page
    // Else redirect to Dashboard

    onMounted(() => {
      checkForToken()
    })

  }
}
</script>
