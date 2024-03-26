<template>
  <div class="fsList">
      <ul>
          <li v-for="item in list" :key="item.id">
              {{ item.title }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        list:Array
    },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
