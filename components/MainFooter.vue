<template>
  <div>
    <nuxt-link class="logo-wrapper" :to="{ path: '/' }">
      <img src="/logo-ruse-white.svg" alt="Logo Ruse" height="32px">
    </nuxt-link>
    <nuxt-link class="footer-link" to="/">Me contacter</nuxt-link>
  </div>
</template>
<style lang="scss" scoped>
.logo-wrapper {
  height: 32px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.9em;
}
</style>
