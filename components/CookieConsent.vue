<template>
  <div class="cookies-consent">
    <div class="read-policy-wrapper">
      <div class="question">Pouvons-nous utiliser des cookies ?</div>
      <div class="read-policy">Lisez notre
        <a class="policy-link" href="https://www.cookiepolicygenerator.com/live.php?token=3JQtiwijXnTMA4cocggmnrzrcoUIbJGG" target="_blank">politique de cookies</a>
      </div>
    </div>
    <div>
      <button class="accept button" @click="emitConsent(true)">Oui</button>
      <button class="decline button" @click="emitConsent(false)">Non</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CookieConsent',
  methods: {
    emitConsent(consent) {
      this.$emit('consent', consent)
    }
  }
}
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
