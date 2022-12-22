<template>
  <button class="button">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'GenericButton',
}
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid $pumpkin-orange;
  border-radius: 50px;
  color: $pumpkin-orange;
  font-family: inherit;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: lighten($pumpkin-orange, 34%);
    transition: background-color 0.2s;
  }
}
</style>
