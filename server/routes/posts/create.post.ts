import z from "zod";
import { createPost } from "~/repository/post";
const postForm = z.object({
  name: z.string().trim().min(1, { message: "Required" }),
  slug: z.string().trim().min(1, { message: "Required" }),
  description: z.string().trim().min(1, { message: "Required" }),
  color: z.string().trim().min(1, { message: "Required" }),
  body: z.string().trim().min(1, { message: "Required" }),
});

export default defineEventHandler(async (event) => {
  const result = postForm.safeParse(await readBody(event));
  if (!result.success) {
    setResponseStatus(event, 400);
    return {
      error: result.error,
    };
  }

  const post = await createPost(result.data);
  return post;
});
