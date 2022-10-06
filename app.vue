<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <client-only>
      <cookie-consent class="cookie-consent" />
    </client-only>
  </div>
</template>
<script setup>
import CookieConsent from "./components/CookieConsent";
</script>
<style lang="scss" scoped>
.cookie-consent {
  z-index: 5;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  box-shadow: 5px 5px 15px 0 transparentize(black, 0.75);

  @media (min-width: $medium-screen) {
    left: unset;
  }
}
</style>
