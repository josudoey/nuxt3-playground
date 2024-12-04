<script setup>
const postData = reactive({
  name: '',
  body: ''
})

const {
  name,
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
    <label for="body">body</label><br>
    <input id="body" type="text" v-model="body"><br>
    <button type="submit">create</button>
  </form>
</template>
