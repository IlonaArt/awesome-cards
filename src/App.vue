<template>
  <div id='app'>
    <div>
      <h1 class='title wave'>{{ title }}</h1>
      <p class='text'>Are you ready?</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Let\'s walk through these awesome cards',
    }
  },
}
</script>

<style>

html {
  box-sizing: border-box;
}

body {
  background-color: #37393B;
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
}

@media screen and (max-width: 880px) {
  #app {
    margin-top: 20px;
  }
  .title {
    margin-top: 20px;
  }
}

.title {
  text-align: center;
  color: #fff;
  font-size: 3.8em;
  margin-bottom: 12px;
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 2.5em;
  }
  .text {
    margin-top: 0;
  }
}

.text {
  text-align: center;
  color: #fff;
  font-size: 1.5em;
}

.wave {
  color: #999999;
  animation: 0.4s color infinite;
}

@keyframes color {
  50% {
    color: #8fc8ae;
  }
  20% {
    color: palevioletred
  }
}

</style>
