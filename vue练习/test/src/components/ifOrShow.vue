<template>
  <div class="ifOrShow">
   <h1>v-if</h1>
   <p v-if="data === 'a'">a(v-if)</p>
   <p v-else-if="data ==='b'">b(v-if)</p>
   <p v-else>other(v-if)</p>
   <hr>
   <h1>v-show</h1>
   <p v-show="data === 'a'">a(v-show)</p>
   <p v-show="data === 'b'">b(v-show)</p>
  </div>
</template>

<script>
export default {
  name: 'ifOrShow',
  data () {
    return {
        data: 'd'
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
