export default defineEventHandler(async (event) => {
  let count = parseInt((await useStorage('redis').getItem('count')) || '') || 0
  count += 1
  await useStorage('redis').setItem('count', count)

  return {
    count
  }
})
