<template>
  <div @click="clicked = true" class="videoplayer">  
    <video :poster="thumbnail || ''" :controls="clicked ? true : null" :style="clicked ? '' : 'cursor:pointer;'" preload="metadata">
      <source :src="source || ''" type="video/mp4">
      Your browser does not support HTML video.
    </video>
    <div class="vignette"></div>
  </div>
</template>

<style>
  .videoplayer video{
    width:100%;
  }
  .videoplayer {
    position:relative;
    border-radius:32px;
    overflow:hidden;
  }
  .videoplayer .vignette {
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:1;
    pointer-events: none;
    box-shadow:0 0 16px #111111 inset!important;
  }
</style>

<script>
  export default {
    name: 'VideoPlayer',
    data () {
      return {
        clicked: false
      }
    },
    props: ['source', 'thumbnail']
  }
</script>