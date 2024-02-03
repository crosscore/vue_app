<!-- vue_app/src/App.vue -->
<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
