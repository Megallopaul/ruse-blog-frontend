<template>
  <div>
    <div v-if="error.statusCode === 404">
      <h1 >404</h1>
      <p>Nous n'avons pas pu trouver cette page :(</p>
    </div>
    <h1 v-else>Il y a eu une erreur :(</h1>
    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
