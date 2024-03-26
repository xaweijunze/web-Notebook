<template>
  <div class="activeClass">
   <!-- <ul class="list">
       <li class="item active">项目1</li>
       <li class="item">项目2</li>
       <li class="item">项目3</li>
   </ul> -->
   <!-- <ul class="list">
       <li class="item active">项目1</li>
       <li class="item" :class = "{'active': isActive}">项目2</li>
       <li class="item">项目3</li>
   </ul> -->
   <!-- <ul class="list">
       <li class="item active">项目1</li>
       <li class="item" :class = "['active']">项目2</li>
       <li class="item">项目3</li>
   </ul> -->
   <ul class="list">
       <li class="item active">项目1</li>
       <li class="item" :style="styleData">项目2</li>
       <li class="item">项目3</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'activeClass',
  data () {
    return {
        isActive: false,
        styleData: {
            background: 'red',

        }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
