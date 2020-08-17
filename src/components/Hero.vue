<template>
  <div class="hero">
    <div class="content">
      <h1 class="mb-0">Tobias <b>Andersen</b></h1>
      <h2 class="mt-0 mb-16">Full-stack Software Developer</h2>
      <div class="nav">
        <a target="_blank" href="https://github.com/dappjumper/">
          GitHub
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/dappjump/">
          LinkedIn
        </a>
        <a target="_blank" href="mailto:tobias@andersen.work">
          tobias@andersen.work
        </a>
      </div>
    </div>
    <canvas id="bgCanvas"></canvas>
  </div>
</template>

<style>
  body {
    max-height:100vh;
    overflow:hidden;
  }
  .hero {
    text-align:center;
    position:relative;
    width:100%;
    height:100vh;
    background: #222222;
    color:#fafafa;
  }
  .hero .content {
    position:absolute;
    width:100%;
    top:50%;
    transform:translate(0,-50%);
  }
  .hero h1 {
    font-size:3rem;
  }
  .hero h2 {
    font-size:1.1rem;
    font-weight:100;
  }
  .nav a {
    display:inline-block;
    padding:1rem;
    margin:1rem;
    outline:0px solid rgba(255,255,255,0);
    outline-offset:64px;
    transition: all .2s;
  }
  .nav a:hover {
    outline:1px solid rgba(255,255,255,0.2);
    outline-offset:0px;
    background:rgba(255,255,255,0.2);
  }
</style>

<script>
  export default {
    name: 'Hero',
    data: () => {
      return {}
    },
    filters: {},
    computed: {},
    created () {},
    methods: {}
  }
</script>