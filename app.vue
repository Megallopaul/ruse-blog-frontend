<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <cookie-consent v-show="hasConsentedCookies === null" class="cookie-consent" @consent="updateConsent"/>
  </div>
</template>
<script setup>
import { useState } from "vue-gtag-next";
import CookieConsent from "./components/CookieConsent";

const { property } = useState()
const hasConsentedCookies = ref(localStorage.getItem('ruse:hasConsentedCookies'))
const updateConsent = (consent) => hasConsentedCookies.value = consent

watch(hasConsentedCookies, (consent) => {
  localStorage.setItem('ruse:hasConsentedCookies', consent)
  if (consent) {
    property.value.anonymize_ip = false
  }
})
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
