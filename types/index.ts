import type { ObjectId } from "mongoose";

export interface Post {
  _id: ObjectId;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  body: string;
  hit: number;
  createdAt: Date;
  updatedAt: Date;
}
