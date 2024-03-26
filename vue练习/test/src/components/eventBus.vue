<template>
  <div class="fatherSon">

    <h1>兄弟组件传值</h1>
    <MyInput @add="add" />
    <Mylist :list="list" />
  </div>
</template>

<script>
import Mylist from './evList'
import MyInput from './evInput'

export default {
  name: "fatherSon",
  data() {
    return {
        list: [
            {id:0 ,title:"项目1"},
            {id:1 ,title:"项目2"}

        ]
    };
  },
  
  methods: {
      add(title){
          let index = this.list.length
          this.list.push({id:index ,title})
      }
  },
  components: {
      Mylist,
      MyInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
