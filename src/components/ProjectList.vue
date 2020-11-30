<template lang="html">

  <div class="blue-background" >
    &nbsp;
    <h2> Project List </h2>
    <button v-on:click="logout" title="Logout"> Logout </button>

  </div>
    <div class="container">
      <div v-if='projectIndex.length === 0' >
        <h4> Loading...</h4>
      </div>

      <div v-for="project in projectIndex" :key="project.id">
        <ProjectBox v-bind:project="project"/>
      </div>

    </div>

    <div class="container-center">
      <div v-if='showPrev'>
        <button title='Prev Page' v-on:click="prevPage" id="nav-button"> 	&lt; </button>
      </div>

      <button  title='Refresh' v-on:click="refresh" id="nav-button">&#x21bb;</button>
      <div v-if='showNext'>
        <button  title='Next Page' v-on:click="nextPage" id="nav-button"> &gt; </button>
      </div>

    </div>

</template>

<script>

// Vue composition API
import { reactive, computed } from 'vue';
import ProjectBox from './ProjectBox';
import router from '../router/index';
import { getProjects } from '../service/APIservice';

// Get Skip for API in props
export default {
  name: 'ProjectList',
  components : { ProjectBox },
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  setup(props) {

    // Initialize project list
    const state = reactive({
      projectList: []
    })

    // computed function
    // Called id query params or projectlist changes
    // Returns project list
    const projectIndex = computed(()=>{

      getProjects(props.id).then(res=>{

        // Deep object comparision
        // Ignor if new response is same as prev response
        if(JSON.stringify(res) !== JSON.stringify(state.projectList) ){
          state.projectList = [...res]
        }
      }, err=>{
        console.log(err);
      })
      return state.projectList;
    })

    // Show Prev button logic
    const showPrev = computed(()=>{
      if(parseInt(props.id)>1){
        return true
      } else {
        return false
      }
    })

    // Show Next button logic
    const showNext = computed(()=>{
      if(parseInt(props.id)<3){
        return true
      } else {
        return false
      }
    })

    const nextPage = function(){
      let id = parseInt(props.id)+1
      router.push('/dashboard/'+id)
    }

    const prevPage = function(){
      let id = parseInt(props.id)-1
      router.push('/dashboard/'+id)
    }

    // Computed function "projectIndex" get called
    // if projectList will change
    const refresh = function() {
      state.projectList = []
    }

    const logout =()=>{
      localStorage.clear();
      router.push('/')
    }

    return {
      state,
      projectIndex,
      nextPage,
      prevPage,
      showNext,
      showPrev,
      refresh,
      logout
    }
  }
}

</script>
