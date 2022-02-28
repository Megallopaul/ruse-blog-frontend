<template>
  <a class="social-media-button" :href="socialMediaUrl" target="_blank">
    <img class="social-media-image" :src="socialMediaImageUrl" alt="" height="24" width="24" style="color: #fdf6ec;">
  </a>
</template>
<script>
export default {
  name: 'SocialMediaButton',
  props: ['socialMediaName'],
  computed: {
    socialMediaUrl() {
      if (this.socialMediaName === 'instagram') return 'https://www.instagram.com/ruse.paris/'
      else if (this.socialMediaName === 'facebook') return 'https://www.facebook.com/rusefr'
    },
    socialMediaImageUrl() {
      return `/${this.socialMediaName}.svg`
    }
  }
}
</script>
<style lang="scss" scoped>
.social-media-button {
  height: 24px;
  width: 24px;
  display: inline-block;
  border: 1px solid $pumpkin-orange;
  border-radius: 50%;
  padding: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: lighten($pumpkin-orange, 32%);
    transition: background-color 0.2s;
  }
}
</style>
