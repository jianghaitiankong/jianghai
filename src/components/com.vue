<template>
  <div>
    <p>子组件</p>
    <p>{{parentMsg}}</p>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "welcome to vue 子组件title",
      content: "welcome to vue  子组件content",
    };
  },
  props:[
      'parentMsg'
  ],
};
</script>
<style scoped>
</style>
