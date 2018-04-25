<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="has-text-white title">
            Referral Bucket
          </h1>
          <h2 class="has-text-white subtitle">
            Grab or add referral codes to the bucket
          </h2>
        </div>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(230, 59, 52);
  height: 100vh;
}

.header {
  margin-bottom: 50px;
}
</style>
