<script setup>
import { useNuxtApp } from "nuxt/app";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const route = useRoute();
console.log(route.params.posts);
let posts = {};
const { $contentful } = useNuxtApp();
const entries = await $contentful.getEntries({
  content_type: "post",
});

posts = entries.items;

const post = computed(() => {
  return posts.find((item) => {
    return item.fields.slug === route.params.posts;
  });
});

console.log(post.value);

const renderedContent = computed(() => {
  if (!post.value) {
    return "";
  }
  return documentToHtmlString(post.value.fields.content);
});

defineProps({
  title: String,
  image: String,
  link: String,
});
</script>

<template>
  <article class="blogPost">
    <img
      :src="post.fields.banner.fields.file.url"
      alt=""
      class="blogPost__image"
    />
    <h1 class="blogPost__title">{{ post.fields.title }}</h1>
    <div v-html="renderedContent"></div>
  </article>
</template>

<style lang="scss">
img {
  height: 200px;
  width: 100%;
}
</style>
