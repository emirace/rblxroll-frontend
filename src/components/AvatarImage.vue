<template>
  <div class="avatar-image">
    <img v-bind:src="avatarImage" @error="avatarImageError()" alt="avatar" />
  </div>
</template>

<script>
import avatar from '@/assets/img/anon.png'
export default {
  name: 'AvatarImage',
  props: ['image'],
  data() {
    return {
      avatarImage: null
    }
  },
  methods: {
    avatarImageError() {
      this.avatarImage = avatar
    }
  },
  created() {
    this.avatarImage =
      this.image === undefined || this.image === null ? '@/assets/img/anon.png' : this.image
  }
}
</script>

<style scoped>
.avatar-image {
  overflow: hidden;
}

.avatar-image img {
  width: 100%;
  height: 100%;
}
</style>
