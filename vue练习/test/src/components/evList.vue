<template>
  <div class="evList">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import eventBus from "./event-bus";
export default {
  props: {
    list: Array
  },
  data() {
    return {};
  },
  methods: {
    handleAddItem(title) {
        console.log('title',title);
        
    }
  },
  mounted() {
    eventBus.$on("addItem", this.handleAddItem);
  },
  beforeDestroy() {
    eventBus.$off("addItem", this.handleAddItem);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
