<template>
  <div class="watch">
    <input v-model="name" />
    <p>{{name}}</p>
    <input v-model="info.hobby" />
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: "watch",
  data() {
    return {
      name: "hello",
      info: {
        hobby: "篮球"
      }
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log(`name : ${newValue} , ${oldValue}`);
    },
    info: {
      handler: function (newValue, oldValue) {
        console.log("info", newValue, oldValue);//这里监听对象无法获取新旧值，因为对象是引用类型的数据
      },
      deep: true  //深度监听 （不写这个和单独写成函数是一样的）
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
