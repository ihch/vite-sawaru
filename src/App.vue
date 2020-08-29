<template lang="pug">
div
  img(alt="Vue logo" src="./assets/logo.png")
  HelloWorld(msg="Hello Vue 3.0 + Vite")
  p {{ hoge }}
  input(v-model="hoge")
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { hoge } from "./utils/hoge";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  props: {
    msg: {
      type: String,
    },
  },
  data() {
    return {
      hoge: hoge(),
    };
  },
  methods: {
    poen() {
      console.log("hoge");
    },
  },
};
</script>
