import { z } from 'zod'
const MessageRequired = { message: 'Required' }

export const createPostRequestObject = z.object({
  name: z.string().trim().min(1, MessageRequired),
  body: z.string().trim().min(1, MessageRequired)
})

export const updatePostRequestObject = createPostRequestObject.merge(z.object({
  id: z.string()
}))

export type CreatePostRequest = z.infer<typeof createPostRequestObject>
export type UpdatePostRequest = z.infer<typeof updatePostRequestObject>
