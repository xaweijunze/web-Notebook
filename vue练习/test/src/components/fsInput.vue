<template>
  <div class="fsInput">
      <input type="text" v-model="title" /> 
      <button @click="addData">添加</button>
  </div>
</template>

<script>
export default {
    props:{
        list:Array
    },
    data(){
        return {
            title: ''
        }
    },
    methods: {
        addData() {
            this.$emit('add',this.title)
        }
    }
    
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

