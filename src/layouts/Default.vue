<template>
  <div class="layout">
    <slot/>
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

export default {
  data: () => {
    return {}
  },
  components: {},
  filters: {},
  computed: {},
  methods: {}
}

</script>