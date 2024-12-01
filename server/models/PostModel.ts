import { defineMongooseModel } from "#nuxt/mongoose";
import type { Post } from "~/types/index";

export const PostModel = defineMongooseModel<Post>({
  name: "Post",
  schema: {
    name: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
    },
    color: {
      type: "string",
      default: "green",
    },
    body: {
      type: "string",
    },
    hit: {
      type: "Number",
      default: 0,
    },
  },
  options: {
    timestamps: true,
  },
});
