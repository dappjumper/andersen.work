// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap'
  })

  head.meta.push({
    name: 'Description',
    content: 'Tobias Andersen, Full-stack Software Developer with 4 years of professional experience as a microservice-oriented full stack developer working with technologies such as JavaScript, APIs/Websockets, and NoSQL. Currently looking for an exciting start-up with a need for a talented developer.'
  })

  Vue.component('Layout', DefaultLayout)
}
