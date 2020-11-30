<template lang="html">
  <div class="round-box">
    Format: {{state.project.main_format}}
    <br/>
    <br/>
    <label for="filtername">Project name:</label>

    <!-- projectIndex is computed function which returns recent name -->
    <!-- Disabled if edit button isn't clicked -->
    <input v-model="projectIndex.name" type="text" :disabled="state.textEditDisable"/>

    <br/>

    <div v-if='state.textEditDisable'>
      <button v-on:click="edit">Edit</button>
    </div>

    <!-- Save recent value of projectIndex.name -->
    <div v-if='!state.textEditDisable'>
      <button v-on:click="save">Save</button>
    </div>
    Last Update: <br/>
    {{projectIndex.date}} <br/>
  </div>
</template>

<script>

import { updateProject } from '../service/APIservice';
import { reactive, computed } from 'vue';
import * as moment from 'moment'

// Get project details as props
export default {

  name: 'ProjectBox',
  props: {
    project: Object
  },
  setup(props) {

    // Initialize State
    const state = reactive({
      project: {},
      textEditDisable: true
    })

    // Return updated prop
    const projectIndex = computed(()=>{
      state.project.main_format = props.project.main_format
      state.project.name = props.project.name
      state.project.date = moment(props.project.updated_at).format('DD MMM, YYYY  HH:mm:ss')
      return state.project;
    })

    const edit = function() {
      state.textEditDisable = !state.textEditDisable
      return state.textEditDisable
    }

    // Update project name
    const save = function() {
      updateProject(props.project.id, projectIndex.value.name).then(res=>{
        console.log(res);
      }, err=>{
        console.log(err);
      })
      state.textEditDisable = !state.textEditDisable
      return state.textEditDisable
    }

    return {
      state,
      projectIndex,
      edit,
      save
    }
  }
}
</script>

<style lang="css" scoped>
</style>
