<script setup>
const postData = reactive({
  name: '',
  slug: '',
  description: '',
  color: 'green',
  body: ''
})

const {
  name,
  slug,
  description,
  color,
  body,
} = toRefs(postData)
async function submitPost() {
  const res = await $fetch('/posts/create', {
    method: 'POST',
    body: postData
  })
}
</script>

<template>
  <form @submit.prevent="submitPost">
    <label for="name">name</label><br>
    <input id="name" type="text" v-model="name"><br>

    <label for="slug">slug</label><br>
    <input id="slug" type="text" v-model="slug"><br>

    <label for="description">description</label><br>
    <input id="description" type="text" v-model="description"><br>

    <label for="color">color</label><br>
    <input id="color" type="text" v-model="color"><br>

    <label for="body">body</label><br>
    <input id="body" type="text" v-model="body"><br>
    <button type="submit">create</button>
  </form>
</template>

