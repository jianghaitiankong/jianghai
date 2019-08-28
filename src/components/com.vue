<template>
  <div>
    <p>子组件</p>
    <p>{{parentMsg}}  ：子组建</p>
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
    }
  },
  props:[
      'parentMsg'
  ],
};
</script>
<style scoped>
</style>
