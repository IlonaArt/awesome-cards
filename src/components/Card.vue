<template>
  <router-link :to='getRoute' class='card' :id='id'>
    <button @click.prevent='removeCard' class='delete-btn' type='button' aria-label='delete card'></button>
    <h2 class='subtitle'>{{ name }}</h2>
    <p class='content'>{{ body }}</p>
    <i class='text'>{{ email }}</i>
  </router-link>
</template>

<script>

export default {
  props: {
    id: Number,
    name: String,
    email: String,
    body: String,
  },
  computed: {
    getRoute() {
      return `/card/${this.id}`;
    }
  },
  methods: {
    removeCard() {
      this.$emit('remove', this.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.card {
  display: flex;
  flex-direction: column;
  color:#ffffff;
  background-color: #37393B;
  padding: 15px;
  --borderWidth: 3px;
  background: #1D1F20;
  position: relative;
  border-radius: 5px;
  height: 400px;
  max-width: 280px;
  word-break: break-word;
  text-decoration: none;
}

.card:hover .subtitle,
.card:focus .subtitle {
  color: mediumslateblue;
}

.card .text {
  font-size: 0.9em;
  margin-top: auto;
  text-align: right;
}

.card:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.subtitle {
  display: block;
  font-size: 1.8em;
  line-height: 1em;
  margin-bottom: 25px;
}

.content {
  font-size: 1em;
  margin-top: 0;
  overflow-y: auto;
}

.content::-webkit-scrollbar-track {
  background-color: #37393B;
  border-radius: 6px;
}

.content::-webkit-scrollbar {
  width: 8px;
}

.content::-webkit-scrollbar:horizontal {
  height: 13px;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: dimgrey;
}

.delete-btn {
  position: relative;
  align-self: flex-end;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: .2s background-color ease
}

.delete-btn:hover,
.delete-btn:focus {
  background-color: tomato;
}

.delete-btn::before,
.delete-btn::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 11px;
  width: 2px;
  height: 14px;
  top: 5px;
  background-color: #000;
}

.delete-btn::before {
  transform: rotate(45deg);
}

.delete-btn::after {
  transform: rotate(-45deg);
}

</style>
