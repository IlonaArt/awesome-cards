<template>
  <div class='card'>
    <h2 class='subtitle'>{{ name }}</h2>
    <p class='content'>{{ body }}</p>
    <i class='text'>{{ email }}</i>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    email: String,
    body: String,
  },
  name: 'Card',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  display: flex;
  flex-direction: column;
  color:#ffffff;
  background-color: #37393B;
  padding: 20px 15px 15px;
  --borderWidth: 3px;
  background: #1D1F20;
  position: relative;
  border-radius: 5px;
  height: 400px;
  width: 280px;
  word-break: break-word;
}

.card .text {
  font-size: 0.9em;
  text-align: right;
  margin-top: auto;
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
}

</style>
