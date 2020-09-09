<template>
  <Layout>
    <ViewBox dark class="first pb-0 md:py-24" style="background:url(https://image.freepik.com/free-vector/minimalist-night-landscape-with-starry-sky-grass_104785-159.jpg); background-size:cover; background-position:bottom center">
      <div class="half">
        <h1 class="mb-2 font-bold">Tobias<br/><span class="font-thin">Andersen</span></h1>
        <h2 class="font-thin mb-4">FULL STACK DEVELOPER</h2>
        <p class="letter-spacing font-thin text-lesser mb-8">
          As a full stack developer, I connect the dots between user experiences, development systems, and business goals while closing any gaps that would prevent holistic production flows.
        </p>
        <p>
          <button @click="scrollTo('#sandbox')" class="md:w-auto mb-4 md:mb-0 bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-2 px-4 inline-flex items-center w-50 mr-4 rounded">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </svg>
            <span>LEARN MORE</span>
          </button>
          <button @click="scrollTo('#contact')" class="md:w-auto rounded bg-transparent border border-red-800 hover:bg-gray-900 font-thin py-2 px-4 inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </svg>
            <span>CONTACT</span>
          </button>
        </p>
      </div>
      <ThreeIllustration />
    </ViewBox>
    <ViewBox dark class="second accent" dense id="brief">
      <div class="third flex-1 pb-12 md:pb-0 md:px-0 md:pr-12">
        <h2 class="font-thin pb-2">
        <div class="heroIconAccent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>FRONTEND</h2>
        <p class="font-thin md:mb-0 letter-spacing text-lesser">Fostering better UX and load-times using the latest frameworks such as Vue.JS to deliver performant applications/websites.</p>
      </div>
      <div class="third flex-1 pb-12 md:pb-0 md:px-6">
        <h2 class="font-thin pb-2"><div class="heroIconAccent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>BACKEND</h2>
        <p class="font-thin md:mb-0 letter-spacing text-lesser">Empowering applications with a framework of APIs/Microservices, Websockets, Smart caching, and databases.</p>
      </div>
      <div class="third flex-1 md:px-0 md:pl-12">
        <h2 class="font-thin pb-2"><div class="heroIconAccent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>DEVOPS</h2>
        <p class="font-thin md:mb-0 letter-spacing text-lesser">Increasing development and maintenance efficiency using version control, CI/CD, monitoring/logging, and testing.</p>
      </div>
    </ViewBox>
    <ViewBox dark hidden pb0 class="second">
      <div class="full">
        <h1 class="font-thin"><span class="text-accent">FEATURED </span><b>PROJECTS</b></h1>
      </div>
    </ViewBox>
    <ViewBox dark hidden class="second">
      <div class="half md:pr-24">
        <h2 class="font-thin pb-2">PROJECT FINCH</h2>
        <p class="pl-2 font-thin text-lesser letter-spacing">
          The single most important full-stack project for passive income and hands-on learning is Project Finch.<br/><br/>
          It has been iterated and upgraded several times as new frameworks, feature requests and interesting technologies were discovered.<br/><br/>
          It is currently split into two parts; a Quasar (vue.js) application statically rendered and connected to a main REST and Websocket server as to adhere to a scalable micro-service architecture.<br/><br/>This separation of client and server is powerful as it allows several different types of clients and platforms (web, android, ios).
        </p>
      </div>
      <div class="half">
        <VideoPlayer source="/rendering.mp4" thumbnail="/projectfinch.jpg"/>
      </div>
    </ViewBox>
    <ViewBox dark class="second" id="sandbox" pb0>
      <div class="full">
        <h1 class="font-thin"><span class="text-accent">LATEST </span><b>SANDBOX RESEARCH</b></h1>
      </div>
    </ViewBox>
    <ViewBox dark pb0 class="second">
      <div class="half md:pr-24">
        <h2 class="font-thin pb-2">3 BROWSER RENDERING EXPERIMENTS</h2>
        <p class="font-thin text-lesser letter-spacing">JavaScript experiments using PixiJS, HTML/CSS and tilt.js to add value to projects and expand my skillset for future projects that require either 2D or 3D rendering.</p>
        <p class="font-thin text-lesser letter-spacing">
          I am always exploring exciting opportunities for in-browser rendering to add interactivity and motion to elements that would benefit from such.<br/><br/>If you have made it this far, do not forget to mention this the next time <a class="cursor-pointer font-bold" @click="scrollTo('#contact')">we talk.</a><br/><br/>Click the giant play button for a funky glimpse into in-browser rendering.
        </p>
      </div>
      <div class="half">
        <VideoPlayer source="/rendering.mp4" thumbnail="/rendering.jpg"/>
      </div>
    </ViewBox>
    <ViewBox dark>
      <div class="third md:pr-12">
        <h2 class="font-thin mb-2">1. DRAW-ON GRID</h2>
        <p class="pb-4 font-thin text-lesser letter-spacing">
          <span class="md:block">
            Generate a grid in the DOM (HTML) with JavaScript and toggle colors via click events<br/><br/>Incomplete tools like these are made to push my understanding of a topic, and also to help with oddly-specific transient challenges.<br/><br/>In this case, there was a need for drawing in a grid and keeping it saved without the overhead of software like Excel and Google Sheets.
          </span>
        </p>
      </div>
      <div class="third md:pr-12">
        <h2 class="font-thin mb-2">2. PIXI CREDIT CARD</h2>
        <p class="pb-4 font-thin text-lesser letter-spacing">
          <span class="md:block">
            Plug-and-play compatible Credit Card visualizer with swap-out templates supported.<br/><br/>Its use case is as a component for fintech companies to showcase their various credit cards in a personalized manner.<br/><br/>The generated credit card is download-able since it is a CANVAS element; vanilla-tilt.js was implemented to add a third dimension to the overall presentation.
          </span>
        </p>
        <p>
          <a target="_blank" href="http://pixiccw.herokuapp.com/" class="md:w-auto mb-4 md:mb-0 bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-1 px-2 inline-flex items-center w-50 mr-4 rounded">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
            </svg>
            <span>DEMO</span>
          </a>
          <a target="_blank" href="https://github.com/dappjumper/pixiccw" class="md:w-auto rounded bg-transparent border border-red-800 hover:bg-gray-900 font-thin py-1 px-2 inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </svg>
            <span>SOURCE</span>
          </a>
        </p>
      </div>
      <div class="third md:pr-12">
        <h2 class="font-thin mb-2">3. PIXI CREATURE SIMULATION</h2>
        <p class="pb-4 font-thin text-lesser letter-spacing">
          <span class="md:block">
            Experimenting with Object-Oriented JavaScript tied to creature behavior.<br/><br/>Each movement is randomly decided on a per-instance basis and works in cronologically large steps, therefore reducing the "computational resolution"<br/><br/>The smooth movement is achieved by tweening between its current pixel-position and where it should be on the grid.<br/>
          </span>
        </p>
        <p>
          <a target="_blank" href="https://www.youtube.com/watch?v=k8adK7AGRLA" class=" md:w-auto mb-4 md:mb-0 bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-1 px-2 inline-flex items-center w-50 mr-4 rounded">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
            </svg>
            <span>VIDEO</span>
          </a>
        </p>
      </div>
    </ViewBox>
    <ViewBox light style="background:#111111; color:#FAFAFA;" class="sixth" id="contact">
      <div class="half">
        <h2 class="text-left mb-16 font-thin">CONTACT INFORMATION</h2>
        <p>
          <a target="_blank" href="mailto:tobias@andersen.work" class="md:w-auto mb-4 bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-1 px-2 inline-flex items-center w-50 mr-4 rounded">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </svg>
            <span>EMAIL</span>
          </a><br/>
          <a target="_blank" href="https://github.com/dappjumper/" class="md:w-auto mb-4 bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-1 px-2 inline-flex items-center w-50 mr-4 rounded">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
              <path id="XMLID_1_" class="st0" d="M12,0.5C5.6,0.5,0.5,5.8,0.5,12.3c0,5.2,3.3,9.6,7.9,11.2c0.6,0.1,0.8-0.3,0.8-0.6c0-0.3,0-1,0-2
                c-3.2,0.7-3.9-1.6-3.9-1.6C4.7,18,4,17.6,4,17.6c-1-0.7,0.1-0.7,0.1-0.7c1.2,0.1,1.8,1.2,1.8,1.2c1,1.8,2.7,1.3,3.3,1
                c0.1-0.8,0.4-1.3,0.7-1.6c-2.6-0.3-5.2-1.3-5.2-5.8c0-1.3,0.4-2.3,1.2-3.2C5.7,8.2,5.3,7,6,5.4c0,0,1-0.3,3.2,1.2
                C10,6.3,11,6.2,12,6.2c1,0,2,0.1,2.9,0.4C17.1,5.1,18,5.4,18,5.4c0.6,1.6,0.2,2.8,0.1,3.1c0.7,0.8,1.2,1.9,1.2,3.2
                c0,4.5-2.7,5.5-5.3,5.8c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,2.8,0,3.2c0,0.3,0.2,0.7,0.8,0.6c4.6-1.6,7.9-6,7.9-11.2
                C23.5,5.8,18.4,0.5,12,0.5z"/>
              </svg>
            </svg>
            <span>GITHUB</span>
          </a><br/>
          <a target="_blank" href="https://www.linkedin.com/in/dappjump/" class="md:w-auto mb-4 bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-1 px-2 inline-flex items-center w-50 mr-4 rounded">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
              <g id="XMLID_2_">
                <path id="XMLID_5_" class="st0" d="M5.9,3.3c0,1.3-1,2.4-2.6,2.4c-1.5,0-2.5-1.1-2.5-2.4c0-1.4,1-2.4,2.6-2.4
                  C4.9,0.9,5.8,2,5.9,3.3z M0.9,23.1V7.6h4.8v15.5H0.9z"/>
                <path id="XMLID_3_" class="st0" d="M8.6,12.6c0-1.9-0.1-3.5-0.1-4.9h4.2l0.2,2.1h0.1c0.6-1,2.2-2.5,4.8-2.5c3.2,0,5.5,2.1,5.5,6.7
                  v9.1h-4.8v-8.6c0-2-0.7-3.4-2.4-3.4c-1.3,0-2.1,0.9-2.5,1.8c-0.1,0.3-0.2,0.8-0.2,1.2v8.9H8.6V12.6z"/>
              </g>
              </svg>
            </svg>
            <span>LINKEDIN</span>
          </a><br/>
          <a target="_blank" href="/tobias_andersen_cv.pdf" class="md:w-auto rounded bg-transparent border border-red-800 hover:bg-gray-900 font-thin py-1 px-2 inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </svg>
            <span>DOWNLOAD CV</span>
          </a>
        </p>
      </div>
      <div class="half">
        <ContactForm style="max-width:500px; margin:0 auto;"/>
      </div>
    </ViewBox>
  </Layout>
</template>

<style>

.viewbox {
  background:#111111;
}



.viewbox.first > .container {
  opacity:1;
  transform:none;
}

.light .emp {
  color:#333333;
}

body {
  background:#111111;
}

.accent {
  margin-top:-5px;
  background: #0B486B;  /* fallback for old browsers */
  background: linear-gradient(to bottom, black, #111111, #111111); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

@media (max-width:768px) {
  .accent {
    background: #222228!important;
  }
  .threeContainer {
    margin-top:3rem!important;
  }
}

.text-red-800, .text-accent, h2 {
  color: #c23b22!important;
}

.accent h2 {
  color:#fafafa!important;
}

.heroIconAccent {
  width:2rem;
  margin-bottom:-0.45rem;
  margin-right:0.7rem;
  display:inline-block;
  color:#c23b22;
}

</style>

<script>

import ContactForm from '~/components/ContactForm'
import ViewBox from '~/components/ViewBox'
import Hero from '~/components/Hero'
import Illustration from '~/components/Illustration'
import ThreeIllustration from '~/components/ThreeIllustration'
import VideoPlayer from '~/components/VideoPlayer'
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
    ThreeIllustration,
    VideoPlayer
  },
  mounted() {
  },
  methods: {
    scrollTo (selector) {
      document.querySelector(selector).scrollIntoView({ 
        behavior: 'smooth'
      });
    },
    addAnim (element) {
      gsap.to(element + ' > .container', {
        scrollTrigger: {
          trigger: element,
          start: 'top 25%',
          end: 'top 75%',
          markers: true
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
