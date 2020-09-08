<template>
  <Layout>
    <ViewBox dark class="first pt-12 pb-0">
      <div class="half">
        <h1 class="mb-2 font-bold">Tobias <span class="font-thin">Andersen</span></h1>
        <h2 class="font-thin mb-12">FULL STACK DEVELOPER</h2>
        <p class="letter-spacing md:pl-2 font-thin text-lesser mb-12">
          As a full stack developer, I connect the dots between user experiences, development systems, and business goals while closing any gaps that would prevent holistic production flows.
        </p>
        <p>
          <button @click="scrollTo('#brief')" class="bg-red-800 border border-red-800 hover:bg-red-700 hover:border-red-700 text-gray-100 font-thin py-4 px-8 inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </svg>
            <span>LEARN MORE</span>
          </button>
          <button @click="scrollTo('#contact')" class="bg-transparent border border-red-800 hover:bg-gray-900 font-thin py-4 px-8 inline-flex items-center">
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
    <ViewBox dark class="second" id="brief">
      <div class="third flex-1 pb-12 md:pb-0 md:px-0 md:pr-12">
        <h2 class="font-thin pb-2">FRONTEND</h2>
        <p class="md:pl-2 font-thin letter-spacing text-lesser">Fostering better UX and load-times using the latest frameworks such as Vue.JS to deliver performant applications/websites.</p>
      </div>
      <div class="third flex-1 pb-12 md:pb-0 md:px-6">
        <h2 class="font-thin pb-2">BACKEND</h2>
        <p class="md:pl-2 font-thin letter-spacing text-lesser">Empowering applications with a framework of APIs/Microservices, Websockets, Smart caching, and databases.</p>
      </div>
      <div class="third flex-1 md:px-0 md:pl-12">
        <h2 class="font-thin pb-2">DEVOPS</h2>
        <p class="md:pl-2 font-thin letter-spacing text-lesser">Increasing development and maintenance efficiency using version control, CI/CD, monitoring/logging, and testing.</p>
      </div>
    </ViewBox>
    <ViewBox hidden dark pb0 class="second">
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
    <ViewBox dark class="second" pb0>
      <div class="full">
        <h1 class="font-thin"><span class="text-accent">EXPERIMENTAL </span><b>PROJECTS</b></h1>
      </div>
    </ViewBox>
    <ViewBox dark pb0 class="second">
      <div class="half md:pr-24">
        <h2 class="font-thin pb-2">IN-BROWSER RENDERING</h2>
        <p class="md:pl-2 font-thin text-lesser letter-spacing">JavaScript experiments using Unity, PixiJS, HTML/CSS and tilt.js to add to my skillset for future projects that require either 2D or 3D rendering.</p>
        <p class="pl-2 font-thin text-lesser letter-spacing">
          I am always exploring exciting opportunities for in-browser rendering to add interactivity and motion to elements that would benefit from such.<br/><br/>If you have made it this far, do not forget to mention this the next time <a class="cursor-pointer font-bold" @click="scrollTo('#contact')">we talk.</a><br/><br/>Click the giant play button for a funky glimpse into in-browser rendering.
        </p>
      </div>
      <div class="half">
        <VideoPlayer source="/rendering.mp4" thumbnail="/rendering.jpg"/>
      </div>
    </ViewBox>
    <ViewBox dark>
      <div class="third md:pr-12">
        <p class="pb-4 font-thin text-lesser letter-spacing">
          <span class="text-accent">DRAW-ON GRID</span>
          <span class="md:pl-2 md:block">
            Generate a grid in the DOM (HTML) with JavaScript and toggle colors via click events<br/><br/>Incomplete tools like these are made to push my understanding of a topic, and also to help with oddly-specific transient challenges.<br/><br/>In this case, there was a need for drawing in a grid and keeping it saved without the overhead of software like Excel and Google Sheets.
          </span>
        </p>
      </div>
      <div class="third md:pr-12">
        <p class="pb-4 font-thin text-lesser letter-spacing">
          <span class="text-accent">PIXI CREDIT CARD</span>
          <span class="md:pl-2 md:block">
            Plug-and-play compatible Credit Card visualizer with swap-out templates supported.<br/><br/>Its use case is as a component for fintech companies to showcase their various credit cards in a personalized manner.<br/><br/>The generated credit card is download-able since it is a CANVAS element; vanilla-tilt.js was implemented to add a third dimension to the overall presentation.
          </span>
        </p>
      </div>
      <div class="third md:pr-12">
        <p class="pb-4 font-thin text-lesser letter-spacing">
          <span class="text-accent">PIXI CREATURE SIMULATION</span>
          <span class="md:pl-2 md:block">
            Experimenting with Object-Oriented JavaScript tied to creature behavior.<br/><br/>Each movement is randomly decided on a per-instance basis and works in cronologically large steps, therefore reducing the "computational resolution"<br/><br/>The smooth movement is achieved by tweening between its current pixel-position and where it should be on the grid.<br/>
          </span>
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
    <ViewBox dark class="sixth" pb0>
      <div class="full">
      </div>
    </ViewBox>
    <ViewBox light style="background:#111111; color:#FAFAFA;" class="sixth" id="contact">
      <div class="half">
        <h2 class="text-left mb-16 font-thin">CONTACT INFORMATION</h2>
        <p class="text-gray-100">
          <a href="mailto:tobias@andersen.work" target="_blank" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-0 mb-4 md:my-0 md:mb-4 md:mx-0 md:mr-2 w-full md:w-auto">
            <span>Email</span>
          </a>
          <a href="https://github.com/dappjumper/" target="_blank" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-0 mb-4 md:my-0 md:mb-4 md:mx-0 md:mx-2 w-full md:w-auto">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/dappjump/" target="_blank" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-0 mb-4 md:my-0 md:mb-4 md:mx-0 md:mx-2 w-full md:w-auto">
            <span>LinkedIn</span>
          </a>
          <a href="/tobias_andersen_cv.pdf" target="_blank" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-0 mb-4 md:my-0 md:mb-4 md:mx-0 md:ml-2 w-full md:w-auto">
            <span>Resume</span>
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
  background: rgba(200,55,55,0.1);
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
