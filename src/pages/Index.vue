<template>
  <Layout>
    <Hero/>
    <section class="accented md:flex">
      <div class="wave"></div>
      <div class="centered">
        <h1 class="text-center md:mt-8">Companies I have collaborated with</h1>
        <div><div class="partners md:flex"><div><img src="~/../logos/dapp.png"></div><div><img src="~/../logos/zeux.png"></div><div><img src="~/../logos/arcc.png"></div><div><img src="~/../logos/dexon.png"></div><div><img src="~/../logos/cobinhood.png"></div><div><img src="~/../logos/ethos.png"></div><div><img src="~/../logos/canimo.png"></div><div><img src="~/../logos/nwd.png"></div></div>
      </div>
    </div>
    </section>
  </Layout>
</template>

<style>

  .wave {
    height:80px;
    width:100%;
    background:url('~../wave.svg');
    position:absolute;
    top:0;
    left:0;
    animation: wave 10s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  }

  @keyframes wave {
    0% {
      background-position:0;
    }
    100% {
      background-position:650px;
    }
  }

  section {
    min-height:100vh;
  }

  .star {
    height:64px;
    width:64px;
    background:#333333;
    position:absolute;
  }

  .partners {
    flex-wrap: wrap;
    align-items: top;
    justify-content: center;
    margin: 0 auto;
  }

  section {
    position:relative;
  }

  @media (min-width: 768px) {
    .centered {
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  }

  .partners div {
    flex-basis: 25%;
    box-sizing:border-box;
    padding:2rem 1rem;
  }
  section {
    padding:3rem;
  }

  .partners img {
    max-height:64px;
    margin:0 auto;
  }

  .accented {
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .accented img {
    filter:invert(100%);
  }

  .accented > *{
    flex-basis: 50%;
  }

</style>

<script>

import Hero from './../components/Hero'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {}
  },
  components: {
    Hero
  },
  mounted() {},
  metaInfo: {
    title: 'Tobias Andersen'
  }
}
</script>
