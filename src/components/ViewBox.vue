<template>
  <section class="viewbox" :style="typeof hidden == 'undefined' ? '' : 'display:none!important;'" :class="{dark: typeof dark !== 'undefined', fullheight: typeof fullheight !== 'undefined'}">
    <div class="p-4 md:pt-24 md:pb-24 md:flex items-center container m-auto">
      <slot />
    </div>
  </section>
</template>

<style scoped>
  .viewbox:nth-child(2) {
    flex-direction: column-reverse;
  }

  .viewbox {
    width:100vw;
    box-sizing:border-box;
    align-items: center;
    justify-content: center;
  }
  .fullheight {
    min-height:100vh;
  }
  .fullheight > div {
    min-height:100vh;
  }
  .dark {
    color:#fafafa;
  }
</style>

<script>
  export default {
    name: 'ViewBox',
    props: ['dark', 'fullheight', 'hidden'],
    mounted () {
    },
    data () {
      return {

      }
    }
  }
</script>