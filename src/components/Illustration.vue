<template>
  <section class="half py-12">
    <div class="illustration">
      <div class="illustration-inner"></div>
    </div>
  </section>
</template>

<style>

.illustration {
  text-align:center;
}

.illustration {
  margin:0 auto;
  height:300px;
  width:300px;
  border-radius:150px;
  background:none;
  border:2px solid #fafafa;
  transition: all .1s ease-in-out;
}

.illustration-inner {
  height:100%;
  width:100%;
  border-radius:150px;
}

</style>

<script>
  export default {
    name: 'Illustration',
    props: ['dark'],
    data () {
      return {

      }
    }
  }
</script>