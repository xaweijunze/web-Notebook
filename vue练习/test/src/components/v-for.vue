<template>
  <div class="v-for">
    <h1>遍历数组</h1>
    <ul>
      <li v-for="(item,index) in array" :key="item.id">
          <span v-if="span"></span>
          {{index}} - {{ item.value }}
        </li>
    </ul>
    <hr />
    <h1>遍历对象</h1>
    <ul>
      <li v-for="(value,key,index) in object" :key="key">
          {{index}} - {{ key }} - {{ value }}
      </li>
    </ul>
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
        object: {
            name: "哈咯",
            hobby: "篮球"
        }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
