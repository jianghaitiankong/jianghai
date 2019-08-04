<template>
  <div>
    <p>子组件</p>
    <p>{{parentMsg}}</p>
    <input v-model="sonMsg" type="text">
    <button @click="myClick">  子组件的方法 </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "welcome to vue 子组件title",
      sonMsg: "",
    };
  },
  methods:{
    myClick(){
      this.$emit('func',this.sonMsg)
      // console.log('ok')
    }
  },
  props:[
      'parentMsg'
  ],
  // $emit('func')
};
</script>
<style scoped>
</style>
