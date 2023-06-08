<script setup>
import { useNuxtApp } from "nuxt/app";

let posts = {};
const { $contentful } = useNuxtApp();
const entries = await $contentful.getEntries({
  content_type: "post",
});

posts = entries.items;
console.log(posts);
</script>

<template>
  <section class="cardSection">
    <div v-for="post in posts" class="cardSection">
      <!-- render blog posts -->
      <BlogCard
        :title="post.fields.title"
        :image="post.fields.banner.fields.file.url"
        :link="post.fields.slug"
      />
    </div>
  </section>
</template>

<style lang="scss">
.cardSection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
