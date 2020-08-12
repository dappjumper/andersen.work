<template>
  <transition name="pagetransition">
  <Layout>
    <h1>How to enjoy life with Cold Brew Gray Brew Coffee</h1>
    <p>
      Gray Brew's hand-crafted Benguet Arabica concentrate is cold-brewed and bottled fresh, daily. We receive orders on a "first come, first serve" basis and deliver within a day or 2, or on the next batch of fresh brews.
    </p>
    <CoffeeForm/>
  </Layout>
</transition>
</template>

<script>

import CoffeeForm from './../components/CoffeeForm.vue'

export default {
  components: {
    CoffeeForm
  },
  metaInfo: {
    title: 'Gray Brew'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
