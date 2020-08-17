<template>
  <div class="layout">
    <CoolHeader/>
    <slot/>
  <p class="text-center text-gray-500 text-xs">
      &copy;2020 Tobias Andersen. All rights reserved.
    </p>
  </div>
</template>
<style>
</style>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

import CoolHeader from './../components/CoolHeader'

export default {
  data: () => {
    return {}
  },
  components: {
    CoolHeader
  },
  filters: {},
  computed: {},
  methods: {}
}

</script>