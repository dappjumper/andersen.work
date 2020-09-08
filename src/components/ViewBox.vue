<template>
  <section class="viewbox" :style="typeof hidden == 'undefined' ? '' : 'display:none!important;'" :class="{dark: typeof dark !== 'undefined', light: typeof light !== 'undefined', fullheight: typeof fullheight !== 'undefined', dense: typeof dense !== 'undefined'}">
    <div :style="(typeof pb0 == 'undefined' ? '' : 'padding-bottom:0!important;')" class="p-4 py-12 md:py-24 md:flex items-center container m-auto">
      <slot />
    </div>
  </section>
</template>

<style scoped>
  .viewbox {
    width:100vw;
    box-sizing:border-box;
    align-items: center;
    justify-content: center;
    overflow:hidden;
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
  .light {
    color:#333333;
  }
  .dense > div {
    padding-top:2rem;
    padding-bottom:2rem;
  }
</style>

<script>
  export default {
    name: 'ViewBox',
    props: ['dark', 'light', 'fullheight', 'hidden','pb0','dense'],
    mounted () {
    },
    data () {
      return {

      }
    }
  }
</script>