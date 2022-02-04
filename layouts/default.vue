<template>
  <div class="default-layout">
    <main-header class="main-header" />
    <nuxt class="main-container"/>
    <main-footer class="main-footer" />
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  background-color: #FDF6EC;
  min-height: 100%;
}
.main-header {
  margin: auto;
  max-width: 100%;
  padding: 2rem;

  @media (min-width: $medium-screen) {
    height: 10vh;
  }
}
.main-container {
  min-height: 78vh;
  margin: auto;
  max-width: 75rem;
  padding: 2rem;
}
.main-footer {
  height: 5vh;
}
</style>
