<template>
  <div class="nextTick">
    <button @click="add">添加</button>
    <ul ref="ulRef">
      <li v-for="(item) in list" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nextTick",
  data() {
    return {
      list: [
        { id: 0, title: "项目1" },
        { id: 1, title: "项目2" },
        { id: 2, title: "项目3" }
      ]
    };
  },
  methods: {
    add() {
      let index = this.list.length;
      this.list.push({ id: index, title: "新增项目" });
       index = this.list.length;
      this.list.push({ id: index, title: "新增项目" });
      
      this.$nextTick(() => {
        const ulElem = this.$refs.ulRef;
        const length = ulElem.childNodes.length;
        console.log(`length ${length}`);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
