<template lang="pug">
div
  img(alt="Vue logo" src="./assets/logo.png")
  HelloWorld(msg="Hello Vue 3.0 + Vite")
  p {{ hoge }}
</template>

<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue'
import { hoge } from './utils/hoge';

export default {
  name: 'App',
  data() {
    return {
      hoge: hoge(),
    };
  },
  components: {
    HelloWorld
  },
}
</script>
