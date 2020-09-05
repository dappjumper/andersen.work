// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  require('typeface-open-sans')
  require('typeface-montserrat')

  head.meta.push({
    name: 'Description',
    content: 'Tobias Andersen, Full-stack Software Developer with 4 years of professional experience as a microservice-oriented full stack developer working with technologies such as JavaScript, APIs/Websockets, and NoSQL. Currently looking for an exciting start-up with a need for a talented developer.'
  })

  Vue.component('Layout', DefaultLayout)
}
