<template>

  <div >
    <ProjectList v-bind:id='state.pageId?parseInt(state.pageId):1' />
  </div>
</template>

<script>

import { useRoute } from 'vue-router';
import { reactive, computed, onMounted } from 'vue';
import ProjectList from '../components/ProjectList';
import router from '../router/index';

export default {
  name: 'Dashboard',
  components: { ProjectList },
  setup() {
    const route = useRoute();

    // Get PageID from query params
    const pageId = computed(() => route.params.pageId)

    const state = reactive({
      pageId
    })

    const checkForToken = ()=>{
      let flag = localStorage.getItem('token')
      if(!flag)
      router.push('/')
    }

    // Check for token on onMounted
    // If token not present, redirect to login page

    onMounted(() => {
      checkForToken()
    })

    return {
      state
    }
  }
}
</script>
