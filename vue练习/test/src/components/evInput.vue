<template>
  <div class="evInput">
      <input type="text" v-model="title" /> 
      <button @click="addData">添加</button>
  </div>
</template>

<script>
import eventBus from './event-bus'
export default {
    
    data(){
        return {
            title: ''
        }
    },
    methods: {
        addData() {
            this.$emit('add',this.title);
            eventBus.$emit('addItem',this.title)
        }
    }
    
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

