<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  <p class="text-center text-gray-500 text-xs">
      &copy;2020 Gray Brew. All rights reserved.
    </p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.pagetransition-enter-active, .pagetransition-leave-active {
  transition: all .1s;
  opacity:1;
  position:relative;
  top:0rem;
}


.pagetransition-enter, .pagetransition-leave-to /* .pagetransition-leave-active below version 2.1.8 */ {
  opacity: 0;
  max-height:0;
  position:relative;
  top:3rem;
}

.pagetransition-enter {
  top:0rem;
}

</style>
