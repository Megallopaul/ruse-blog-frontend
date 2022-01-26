<template>
  <div>
    <NuxtLink to="/">
      <button>
        Home
      </button>
    </NuxtLink>
    <h1>{{ $route.params.article.attributes.Title }}</h1>
    <p>{{ $route.params.article.attributes.Content }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage'

}
</script>
