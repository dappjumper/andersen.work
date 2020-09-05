<template>
  <Layout>
    <ViewBox dark fullheight class="first">
      <div class="half">
        <h1>Tobias Andersen</h1>
        <h2 class="text-lesser">FULL STACK DEVELOPER</h2>
        <p class="letter-spacing text-lesser">
          As a full stack developer, I connect the dots between user experiences, development systems, and business goals while closing any gaps that would prevent holistic production flows.
        </p>
        <p class="text-gray-100 pt-6">
          <a rel="noreferrer" class="emp sm:mr-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="mailto:tobias@andersen.work">Email</a>
          <a rel="noreferrer" class="emp sm:mx-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="https://github.com/dappjumper/">GitHub</a>
          <a rel="noreferrer" class="emp sm:mx-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="https://www.linkedin.com/in/dappjump/">LinkedIn</a>
          <a rel="noreferrer" class="emp sm:ml-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="/tobias_andersen_cv.pdf">Download CV</a>
        </p>
      </div>
      <ThreeIllustration />
    </ViewBox>
    <ViewBox hidden dark class="second">
      <Illustration />
      <div class="half">
        <h2>FRONT END</h2>
        <p class="text-lesser letter-spacing">
          Using [INSERT FRONTEND TOOLS], I foster greater interactions between users and products by building web interfaces with accessibility in mind.
        </p>
      </div>
    </ViewBox>
    <ViewBox hidden dark class="third">
      <div class="half">
        <h2>BACK END</h2>
        <p class="text-lesser letter-spacing">
          Using [INSERT BACKEND TOOLS]
        </p>
      </div>
      <Illustration />
    </ViewBox>
    <ViewBox hidden dark class="fourth">
      <Illustration />
      <div class="half">
        <h2>DEVOPS</h2>
        <p class="text-lesser letter-spacing">
          Using [INSERT DEVOPS TOOLS]
        </p>
      </div>
    </ViewBox>
    <ViewBox hidden dark class="fifth">
      <div class="half">
        <h2>COMMUNITY LEADERSHIP</h2>
        <p class="text-lesser letter-spacing">
          Using [INSERT LEADERSHIP TOOLS]
        </p>
      </div>
      <Illustration />
    </ViewBox>
    <ViewBox dark class="sixth">
      <div class="full">
        <h2 class="text-center">Contact me</h2>
        <ContactForm style="max-width:500px; margin:0 auto;"/>
      </div>
    </ViewBox>
  </Layout>
</template>

<style>

.viewbox {
  background:#111111;
}

.viewbox:nth-child(even) {
  background: #0F2027;  /* fallback for old browsers */
}

.viewbox > .container {
  opacity:0;
  transform:scale(0,1);
}

.viewbox.first > .container {
  opacity:1;
  transform:none;
}

body {
  background:#111111;
}
</style>

<script>

import ContactForm from '~/components/ContactForm'
import ViewBox from '~/components/ViewBox'
import Hero from '~/components/Hero'
import Illustration from '~/components/Illustration'
import ThreeIllustration from '~/components/ThreeIllustration'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  toggleActions: "play reverse play reverse"
});

export default {
  components: {
    Hero,
    ViewBox,
    ContactForm,
    Illustration,
    ThreeIllustration
  },
  mounted() {
    this.addAnim('.second')
    this.addAnim('.third')
    this.addAnim('.fourth')
    this.addAnim('.fifth')
    this.addAnim('.sixth')
  },
  methods: {
    addAnim (element) {
      gsap.to(element + ' > .container', {
        scrollTrigger: {
          trigger: element,
          start: 'top 75%',
          end: 'bottom 25%'
        }, 
        duration: 0.2,
        transform: 'scale(1,1)',
        opacity: 1
      });
    } 
  },
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
