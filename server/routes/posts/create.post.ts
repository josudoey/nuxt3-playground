import { createPostRequestObject } from '~/types/post'
import { createPost } from '~/models/post'

export default defineEventHandler(async (event) => {
  const result = createPostRequestObject.safeParse(await readBody(event))
  if (!result.success) {
    setResponseStatus(event, 400)
    return {
      error: result.error
    }
  }

  const post = await createPost(result.data)
  return post
})
