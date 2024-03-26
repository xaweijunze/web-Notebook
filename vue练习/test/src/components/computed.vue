<template>
  <div class="computed">
    <p> {{number}} </p>
    <p>double1: {{ double1 }}</p>
    <input v-model="double2" />
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      number: 5
    }
  },
  computed: {
      double1(){
          return this.number * 2;
      },
      double2: {
          get(){
              return this.number * 2;
          },
          set(value){
              this.number = value / 2;
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
