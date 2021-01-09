<template>
  <div id='app'>
    <h1 class='title wave'>{{ title }}</h1>
    <p class='text'>Are you ready?</p>
    <button @click='addCard()' class='add-btn' type='button'>
      <span class='text-btn'>Add card+</span> 
    </button>
    <ul class='list'>
      <li class='item' v-for='(card, index) of cards' v-bind:key='card.id' v-on:remove='cards.splice(index, 1)'>
        <Card v-bind:email='card.email' v-bind:name='card.name' v-bind:body='card.body'></Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Let\'s walk through these awesome cards',
      cards: []
    }
  },
  components: {
    Card
  },
  created: function() {
    const content = this;
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        content.cards = data;
      })
      .catch(error => console.error(error))
  },
  methods: {
    addCard() {
      this.cards.unshift({
        "id": this.cards.length + 1,
        "name": "kjh",
        "email": "h@gardner.biz",
        "body": "laudantium enim quasi eam autem quasi\nreiciendis et nam sapiente accusantium"
      })
    },
    removeCard() {
      this.cards.splice()
    }
  }
}
</script>

<style>

html {
  box-sizing: border-box;
}

body {
  background-color: #37393B;
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

.title {
  text-align: left;
  color: #fff;
  font-size: 3.8em;
  margin-bottom: 12px;
}

.text {
  text-align: left;
  color: #fff;
  font-size: 1.5em;
}

.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1140px;
}

.item {
  margin-bottom: 40px;
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

.add-btn {
  display: block;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 24px;
  height: 40px;
  padding: 5px 20px;
  outline: none;
  border: 3px solid transparent;
}

.add-btn:hover,
.add-btn:focus {
  border: 3px solid violet
}

.text-btn {
  font-size: 1.5em;
  font-weight: 600;
}
</style>
