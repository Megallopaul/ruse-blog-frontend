<template>
  <nav class="main-header">
    <nuxt-link to="/">
      <img src="/logo-ruse.svg" alt="Logo Ruse" height="65px">
    </nuxt-link>
    <ul class="main-navigation" role="navigation">
      <li>
        <nuxt-link class="nav-link" to="/">Blog</nuxt-link>
      </li>
      <!--
      <li>
        <nuxt-link class="nav-link" to="/who-am-i">Qui suis-je ?</nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link" to="contact">Me contacter</nuxt-link>
      </li>
      -->
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.main-header {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: $medium-screen) {
    flex-direction: row;
    max-width: 70rem;
  }
}
.main-navigation {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 1em 0 0 0;
  list-style: none;
  padding: 0;

  @media (min-width: $small-screen) {
    flex-direction: row;
    gap: 4rem;
    margin: 0;
  }
}
.nav-link {
  color: $blood-red;
  display: inline-block;
  font-family: $primary-font;
  font-size: 1.1em;
  text-decoration: none;

  &.nuxt-link-active:after, &:hover:after {
    content: '';
    display: block;
    height: 3px;
    width: 100%;
    background-color: $pumpkin-orange;
    border-radius: 10px;
    margin-top: 0.2em;
  }

  &:hover:after {
    animation: slide;
    animation-duration: 0.2s;
    animation-timing-function: ease;
  }

  @keyframes slide {
    from {width: 0;}
    to {width: 100%;}
  }
}
</style>
