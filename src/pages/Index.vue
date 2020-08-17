<template>
  <Layout>
    <Hero/>
    <section>
      Some content
    </section>
    <section>
      Some other content
    </section>
  </Layout>
</template>

<style>

  .star {
    height:64px;
    width:64px;
    background:#333333;
    position:absolute;
  }

  body {
    height:5000px;
  }

</style>

<script>

import Hero from './../components/Hero'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Hero
  },
  mounted() {},
  metaInfo: {
    title: 'Tobias Andersen'
  }
}
</script>
