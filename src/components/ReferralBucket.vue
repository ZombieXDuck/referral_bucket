<template>
  <div class="columns">
    <div class="column">
      <a class="button is-warning is-large has-text-off-black" href="#/add">
        Add to bucket
      </a>
    </div>
    <div class="column">
      <a class="button is-warning is-large has-text-0ff-black" href="#/grab">
        Grab from bucket
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferralBucket'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .has-text-off-black {
    color: rgb(34, 34, 34);
  }
</style>
