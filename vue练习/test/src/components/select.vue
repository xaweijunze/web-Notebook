<template>
  <div class="v-for">
    <div id="input"></div>
    <div id="select">
    </div>

  </div>
</template>

<script>
export default {
  name: "v-for",
  data() {
    return {
        span: true,
        array: [
            {id:0 ,value:'项目1'},
            {id:1 ,value:'项目2'},
            {id:2 ,value:'项目3'}
        ],

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
