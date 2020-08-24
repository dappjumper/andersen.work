<template>
  <Layout>
    <div class="gradient">
      <section class="p-4 md:pt-24 md:pb-24 md:flex items-center container m-auto hero">
        <div class="flex-1">
          <h1 class="mb-2 text-gray-100">Tobias <b>Andersen</b></h1>
          <h2 class="mb-8 text-gray-100 font-thin">Full-stack Software Developer</h2>
          <p class="text-gray-100">
            4 years of professional experience as a microservice-oriented full stack developer working with technologies such as JavaScript, APIs/Websockets, and NoSQL.
          </p>
          <p class="text-gray-100">
            Currently looking for an exciting start-up with a need for a talented developer.
          </p>
          <p class="text-gray-100 pt-6 links">
            <a class="sm:mr-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="mailto:tobias@andersen.work">Email</a>
            <a class="sm:mx-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="https://github.com/dappjumper/">GitHub</a>
            <a class="sm:ml-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="https://www.linkedin.com/in/dappjump/">LinkedIn</a>
          </p>
        </div>
        <ContactForm/>
      </section>
    </div>
  </Layout>
</template>

<style>

  .links a {
    border:1px solid rgba(255,255,255,0.1);
    padding:0.5rem 1.3rem;
    transition:background .05s;
  }

  .links a:hover {
    background:rgba(255,255,255,0.1);
  }

  .hero {
    min-height:100vh;
  }
  .gradient {
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .gradient section {
    background:none;
  }

  .hero h1 {
    font-size:3rem;
    line-height:3rem;
  }

</style>

<script>

import ContactForm from '~/components/ContactForm'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    ContactForm
  },
  mounted() {},
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
