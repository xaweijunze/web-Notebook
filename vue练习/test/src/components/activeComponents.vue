<template>
  <div class="activeComponents">
      <div v-for="item in productDatas " :key="item.id">
         <component :is="`My${item.type}`"> </component>
      </div>
  </div>
</template>

<script>
import activeCoImage from './activeCoImage';
import activeCoVideo from './activeCoVideo';
// import activeCoText from './activeCoText';
export default {
  name: 'activeComponents',
  data () {
    return {
        productDatas:[
            {id: 0 ,type: 'Text'},
            {id: 1 ,type: 'Video'},
            {id: 2 ,type: 'Image'},
            {id: 3 ,type: 'Text'},
        ]
        
    }
  },
  components: {
      MyImage: activeCoImage,
      MyVideo: activeCoVideo,
    //   MyText: activeCoText,

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
