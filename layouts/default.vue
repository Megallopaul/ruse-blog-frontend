<template>
  <div class="default-layout">
    <header class="main-header">
      <main-header class="main-header-content"/>
    </header>
    <div class="main-container">
      <slot/>
    </div>
    <div class="social-medias-container">
      <ul class="social-medias-list">
        <li>
          <social-media-button class="social-media" social-media-name="instagram" />
        </li>
        <li>
          <social-media-button class="social-media" social-media-name="facebook" />
        </li>
      </ul>
    </div>
    <footer class="main-footer">
      <main-footer class="main-footer-content" />
    </footer>
  </div>
</template>
<script>
import CookieConsent from "../components/CookieConsent"
import MainHeader from "../components/MainHeader"
import MainFooter from "../components/MainFooter"
import SocialMediaButton from "../components/SocialMediaButton"
import { useState } from "vue-gtag-next"

export default {
  components: { CookieConsent, MainHeader, MainFooter, SocialMediaButton },
  setup() {
    useHead({
      titleTemplate: '%s - Ruse'
    })
    const { property } = useState()
    const hasConsentedCookies = ref(localStorage.getItem('ruse:hasConsentedCookies'))
    const updateConsent = (consent) => hasConsentedCookies.value = consent

    watch(hasConsentedCookies, (consent) => {
      localStorage.setItem('ruse:hasConsentedCookies', consent)
      if (consent) {
        property.value.anonymize_ip = false
      }
    })

    return {
      hasConsentedCookies,
      updateConsent
    }
  },
  /*
  async mounted() {
    this.hasConsentedCookies = localStorage.getItem('ruse:hasConsentedCookies')
    if (this.hasConsentedCookies) {
      // await bootstrap()
    }
  },
  methods: {
    async updateConsent(consent) {
      this.hasConsentedCookies = consent
      localStorage.setItem('ruse:hasConsentedCookies', consent)
      if (consent) {
        // await bootstrap()
      }
    },
  }
 */
}
</script>
<style lang="scss" scoped>
.default-layout {
  background-color: #FDF6EC;
  min-height: 100vh;
  display: grid;
  row-gap: 2rem;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: auto auto 10vh;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
  padding-top: 1rem;

  @media (min-width: $medium-screen) {
    grid-template-rows: 15vh auto 10vh;
  }

  @media (min-width: $large-screen) {
    grid-template-columns: 1fr 4fr 1fr;
  }

  @media (min-width: $x-large-screen) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media (min-width: $xx-large-screen) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
}
.main-header {
  align-self: center;
  grid-area: header;
  grid-column: 1 / 4;

  @media (min-width: $medium-screen) {
    grid-column: 2 / 3;
  }
}
.main-container {
  grid-area: main;
  grid-column: 1 / 4;
  padding: 1rem;

  @media (min-width: $medium-screen) {
    grid-column: 2 / 3;
    padding: 0;
  }
}
.social-medias-container {
  grid-area: main;
  display: none;
  grid-column: 3 / 4;
  position: relative;
  padding-left: 2rem;

  @media (min-width: $medium-screen) {
    display: inline-block;
  }

  .social-medias-list {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    margin: 0;
    padding: 0;
    position: fixed;
  }
}
.main-footer {
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
  color: white;
  background-color: #190100;
  padding: 0 1rem;

  @media (min-width: $large-screen) {
    grid-template-columns: 1fr 4fr 1fr;
  }

  @media (min-width: $x-large-screen) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media (min-width: $xx-large-screen) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
}
.main-footer-content {
  grid-column: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: $medium-screen) {
    grid-column: 2 / 3;
  }
}
</style>
