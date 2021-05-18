<template>
  <div class='card-content'>
    <h2 class='subtitle'>{{card.name}}</h2>
    <p class='content'>{{card.body}}</p>
    <i class='text'>{{card.email}}</i>
  </div>
</template>

<script>

export default {
  data() {
    return {
      card: {}
    }
  },
  created: function() {
    const content = this;
    fetch(`https://jsonplaceholder.typicode.com/comments/${this.$route.params.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        content.card = data;
      })
      .catch(error => console.error(error))
  },
  computed: {
    cardParams() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

.card-content {
  margin: 0 auto;
  max-width: 1140px;
  color: #fff
}
</style>