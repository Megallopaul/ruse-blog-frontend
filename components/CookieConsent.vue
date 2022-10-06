<template>
  <div class="cookies-consent" v-show="hasConsented === null">
    <div class="read-policy-wrapper">
      <div class="question">Pouvons-nous utiliser des cookies ?</div>
      <div class="read-policy">Lisez notre
        <nuxt-link class="policy-link" to="/cookie-policy">politique de cookies</nuxt-link>
      </div>
    </div>
    <div>
      <button class="accept button" @click="updateConsent(true)">Oui</button>
      <button class="decline button" @click="updateConsent(false)">Non</button>
    </div>
  </div>
</template>
<script setup>
import { useState } from "vue-gtag-next";

const { property } = useState()
const hasConsented = ref(localStorage.getItem('ruse:hasConsentedCookies'))

const updateConsent = (consent) => hasConsented.value = consent

watch(hasConsented, (consent) => {
  localStorage.setItem('ruse:hasConsentedCookies', consent)
  if (consent) {
    property.value.anonymize_ip = false
  }
})
</script>
<style lang="scss" scoped>
.cookie-consent {
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  justify-content: space-between;
}
.read-policy-wrapper {
  margin-right: 1rem;
  font-size: 0.9em;
}
.read-policy {
  font-size: 0.8em;
  line-height: 1.2em;
}
.question {
  font-weight: 500;
}
.policy-link {
  color: $pumpkin-orange;
  text-decoration-color: $pumpkin-orange;

  &:visited, &:link {
    color: $pumpkin-orange;
  }
}
.button {
  border-radius: 8px;
  font-weight: 600;
  height: 48px;
  width: 56px;
  border: none;
  font-family: inherit;
  font-size: 0.9em;
  cursor: pointer;

  &.accept {
    background-color: $pumpkin-orange;
    color: white;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: in;
  }
}
</style>
