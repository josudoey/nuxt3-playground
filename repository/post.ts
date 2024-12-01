import { PostModel } from "~/server/models/PostModel";
export async function createPost(newData: Post) {
  return PostModel.create(newData);
}
