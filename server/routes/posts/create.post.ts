import { createPost } from "~/repository/post";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const post = await createPost(body);
  return post;
});
