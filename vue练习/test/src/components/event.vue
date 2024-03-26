<template>
  <div class="event">
    <h1>事件</h1>
    <p>{{ number }}</p>
    <button @click="add1">点击加1</button>
    <button @click="add10(10,$event)">点击加10</button>

  </div>
</template>

<script>
export default {
  name: "event",
  data() {
    return {
        number: 1
    };
  },
  methods: {
      add1(e){
          this.number++;
          console.log(e);
          console.log(e.__proto__.constructor);
          console.log(e.target);
          console.log(e.currentTarget);
          
          
      },
      add10(temp,e){
          console.log(e);
          this.number+=temp;
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
