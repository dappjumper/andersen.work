<template>
  <header class="header w-full">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
          <g-image width="64" src="~/logo.png" />
      </div>
      <!--<div class="w-full block float-right lg:flex md:items-center md:w-auto">
        <div class="text-sm md:flex-grow">
          <g-link to="/" class="block mt-4 md:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
            Home
          </g-link>
          <g-link to="/portfolio" class="block mt-4 md:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
            Portfolio
          </g-link>
          <g-link to="/contact" class="block mt-4 md:inline-block lg:mt-0 text-gray-100 hover:text-white">
            Contact
          </g-link>
        </div>
      </div>-->
    </nav>
  </header>
</template>

<style>
  header {
    position:absolute;
    z-index:9999;
    transition:all .1s;
  }
</style>

<script>
  export default {
    name: 'CoolHeader',
    data: () => {
      return {}
    },
    filters: {},
    computed: {},
    created () {},
    methods: {}
  }
</script>