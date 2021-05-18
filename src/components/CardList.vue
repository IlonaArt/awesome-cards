<template>
  <div>
    <form @submit.prevent='addCard' class='form'>
      <label for='title' class='label'></label>
      <input v-model='nameInputValue' id='title' name='title' type='text' class='text-input' placeholder='write your awesome card title here...'>
      <label for='text' class='label'></label>
      <input v-model='bodyInputValue' id='text' name='text' type='text' class='text-input' placeholder='and then add content here...'>
      <label for='email' class='label'></label>
      <input v-model='emailInputValue' id='email' name='email' type='text' class='text-input' placeholder="and don't forget to write your email...">
      <button class='add-btn' type='submit'>
        <span class='text-btn'>Add card+</span> 
      </button>
    </form>
    <ul class='list' v-on:scroll="handleScroll">
      <li class='item' v-for='(card, index) in cards' :key='index'>
        <Card :id='card.id' :email='card.email' :name='card.name' :body='card.body' @remove='removeCard'></Card>
      </li>
    </ul>
  </div>
</template>

<script>

import Card from './Card.vue';
import debounce from 'lodash/debounce';

export default {
  name: 'CardList',
  data() {
    return {
      cards: [],
      startNumber: 0,
      limitNumber: 50,
      nameInputValue: '',
      bodyInputValue: '',
      emailInputValue: '',
    }
  },
  components: {
    Card,
  },
  props: {
    id: Number,
    name: String,
    email: String,
    body: String,
  },
  created: function() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener('scroll', this.handleDebouncedScroll);
    this.getData();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    getData() {
      fetch(`https://jsonplaceholder.typicode.com/comments?_start=${this.startNumber}&_limit=${this.limitNumber}`)
        .then(function(response) {
          return response.json();
        })
        .then((data) => {
          this.startNumber += this.limitNumber;
          this.cards = [...this.cards, ...data];
        })
        .catch(error => console.error(error))
    },
    handleScroll() {
      this.cards.forEach(card => {
        if (card.id === this.startNumber) {
          this.getData();
        }
      })
    },
    addCard() {
      const newCard = {
        id: this.cards.length + 1,
        name: this.nameInputValue,
        body: this.bodyInputValue,
        email: this.emailInputValue,
      }
      this.cards.unshift(newCard);
      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(newCard),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      this.nameInputValue = ''
      this.bodyInputValue = ''
      this.emailInputValue = ''
    },
    removeCard(id) {
      this.cards = this.cards.filter(card => card.id !== id)
      fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'DELETE',
      })
    }
  }
}
</script>

<style scoped>

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
  margin: 0 auto 50px
}

.add-btn:hover,
.add-btn:focus {
  border: 3px solid violet;
}

.text-btn {
  font-size: 1.5em;
  font-weight: 600;
}

.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1140px;
  padding: 0;

  /* @media screen (max-width: 1024px) {
    
  } */
}

.item {
  margin-bottom: 40px;
}

.form {
  width: 500px;
  margin: 0 auto;
}

.text-input {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border:  3px solid transparent;
  padding: 3px 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  outline: none;
}

.text-input:focus {
  border: 3px solid #9057c9;
}

</style>