<!-- <template>
  <HelloWorld
    msg="Thank you for using our product. We're glad you're with us."
  />
</template> -->
<template>
  <NavBar />
  <ul>
    <li v-for="item in items" v-bind:key="item">{{ item }}</li>
    <li id="about">About</li>
  </ul>
</template>

<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar,
  },
  data() {
    return {
      items: [
        'Hello world 1',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
        'Hello world',
      ],
    };
  },
};
</script>

<style>
@import url('./assets/fonts/raleway/raleway.css');

#app {
  font-family: 'Raleway', sans-serif;
}
</style>
