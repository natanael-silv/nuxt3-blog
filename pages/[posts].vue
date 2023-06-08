<template>
  <main class="mainSection">
    <article class="blogPost">
      <h1 class="blogPost__title">{{ post.fields.title }}</h1>

      <img
        :src="post.fields.banner.fields.file.url"
        alt=""
        class="blogPost__image"
      />
      <span>Created at: {{ formatDate(post.fields.data) }}</span>
      <div class="blogPost__content" v-html="renderedContent"></div>
    </article>
  </main>
</template>

<script setup>
import { useNuxtApp } from "nuxt/app";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Prism from "~/plugins/prism.js";
import he from "he";

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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleString("en-US", options);
};
console.log(post.value);

const renderedContent = computed(() => {
  if (!post.value) {
    return "";
  }

  return documentToHtmlString(post.value.fields.content, {
    renderMark: {
      [MARKS.CODE]: (text) => {
        const decodedText = he.decode(text);
        const highlightedCode = Prism.highlight(
          decodedText,
          Prism.languages.javascript,
          "javascript"
        );
        return `<pre><code class="language-javascript">${highlightedCode}</code></pre>`;
      },
    },
  });
});

defineProps({
  title: String,
  image: String,
  link: String,
});
</script>

<style lang="scss">
.mainSection {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2rem;
}
.blogPost {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__title {
    font-weight: bold;
    font-size: 2rem;
    color: #333;
    margin: 30px 0;
  }
  &__content {
    color: #4a4a4a;
    font-size: 1.25rem;
    p {
      padding-bottom: 10px;
    }
    b,
    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  &__image {
    @media (min-width: 750px) {
    }
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }
}
</style>
