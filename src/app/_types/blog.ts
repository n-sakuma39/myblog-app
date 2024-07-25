import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type CategoryName = {
  id: string;
  name: string;
  count: number;
} & MicroCMSDate;

export type TagName = {
  id: string;
  name: string;
} & MicroCMSDate;

export type Article = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  categories: CategoryName[];
  tags: TagName[];
  publishedAt?: string;
} & MicroCMSDate;

export interface BlogItemProps {
  article: {
    id: string;
    eyecatch?: {
      url?: string;
    };
    categories: { name: string }[];
    title: string;
    publishedAt?: string;
    tags: { name: string }[];
  };
}
