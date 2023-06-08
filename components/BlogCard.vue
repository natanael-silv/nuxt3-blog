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
  max-width: 320px;
  height: 338px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease-in-out;
  &__image {
    width: 100%;
    height: 200px;
  }
  &__title {
    padding: 20px 10px;
  }
}
.blogCard:hover {
  transform: translateY(-3px);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.link {
  text-decoration: none;
  color: inherit;
}
</style>
