<template>
  <div class="hello">
    <p> {{name}} </p>
    <p> {{dysnamicId}} </p>
    <p> {{ flag ? 'yes' : 'no' }} </p>
    <p> {{name.split('').reverse().join('')}} </p>
    <div v-html="html1"></div>
    <div v-html="html2">
      <p>我是123</p>
    </div>
    <!-- <div v-html="html3"></div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'hello',
      dysnamicId: Math.random(),
      flag: true,
      html1: "<p>我是P标签</p>",
      html2: "<p>我是P标签</p>",
      html3: `<img src="123" onerror="alert('我是黑客~~~')" />`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
