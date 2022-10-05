<template>
  <div>
    <nuxt-link class="logo-wrapper" :to="{ path: '/' }">
      <img src="/logo-ruse-white.svg" alt="">
    </nuxt-link>
    <nuxt-link class="footer-link" to="/cookie-policy">Politique de cookies</nuxt-link>
    <a class="footer-link" href="mailto:mathilde@ruse-paris.fr?subject=Prise de contact" target="_blank">Me contacter</a>
  </div>
</template>
<style lang="scss" scoped>
.logo-wrapper {
  height: 32px;

  & > img {
    height: 100%;
  }
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.9em;
}
</style>
