<script setup>
defineProps({
  title: String,
  image: String,
  link: String,
});
</script>

<template>
  <NuxtLink :to="link" class="link">
    <div class="blogCard">
      <img :src="image" alt="" class="blogCard__image" />
      <h2 class="blogCard__title">{{ title }}</h2>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.blogCard {
  width: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &__image {
    width: 100%;
    height: 200px;
  }
  &__title {
    padding: 20px 10px;
  }
}
.link {
  text-decoration: none;
  color: inherit;
}
</style>
