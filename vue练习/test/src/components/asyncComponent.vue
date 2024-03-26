<template>
  <div class="asyncComponent">
   <active-co-text v-if="flag"></active-co-text>
   <button @click="flag = true">添加text</button>
  </div>
</template>

<script>
export default {
  name: 'asyncComponent',
  data () {
    return {
        flag: false,
      
    }
  },
  components:{
      activeCoText: ()=>import(/*  webpackChunkName:"text"  */'./activeCoText')
  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
