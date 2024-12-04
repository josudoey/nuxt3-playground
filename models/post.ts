import { type CreatePostRequest } from '~/types/post'
import mongoose, { type HydratedDocument, type InferSchemaType, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: 'string',
    required: true
  },
  body: {
    type: 'string'
  }
}, {
  timestamps: true
})

const CollectionName = 'post'
const ModelName = CollectionName

export { CollectionName, ModelName }
export const PostModel = mongoose.model(ModelName, schema, CollectionName)

export type PostDocumentModel = typeof PostModel
export type Post = InferSchemaType<typeof schema>
export type PostDocument = HydratedDocument<Post>

export async function createPost(newData: CreatePostRequest): Promise<PostDocument> {
  const post = new PostModel(newData)
  await post.save()
  return post
}
