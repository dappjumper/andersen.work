<template>
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
        <p class="text-gray-100 pt-6">
          <a rel="noreferrer" class="emp sm:mr-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="mailto:tobias@andersen.work">Email</a>
          <a rel="noreferrer" class="emp sm:mx-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="https://github.com/dappjumper/">GitHub</a>
          <a rel="noreferrer" class="emp sm:mx-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="https://www.linkedin.com/in/dappjump/">LinkedIn</a>
          <a rel="noreferrer" class="emp sm:ml-3 rounded block w-full sm:inline mb-5 sm:mb-0" target="_blank" href="/tobias_andersen_cv.pdf">Download CV</a>
        </p>
      </div>
      <ContactForm/>
    </section>
  </div>
</template>

<style>
  a.emp {
    border:1px solid rgba(255,255,255,0.1);
    padding:0.5rem 1.3rem;
    transition:background .05s;
  }

  a.emp:hover {
    background:rgba(255,255,255,0.1);
  }
</style>

<script>

import ContactForm from '~/components/ContactForm'

  export default {
    name: 'Hero',
    components: {
      ContactForm
    }
  }
</script>