import { Article, CategoryName, TagName } from "@/types/articleType";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN)
  throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY)
  throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is required");

// microCMSClientの作成
export const microCMSClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// 記事一覧の取得
export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await microCMSClient.getList<Article>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: "articles",
    queries,
  });
  return articles;
}

// 特定の記事を取得
export async function getArticlesDetail(
  contentId: string,
  queries?: MicroCMSQueries
) {
  const articlesDetail = await microCMSClient.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: "articles",
    contentId,
    queries,
  });
  return articlesDetail;
}

// カテゴリ一覧を取得
export async function getCategories(queries?: MicroCMSQueries) {
  const categories = await microCMSClient.getList<CategoryName>({
    endpoint: "categories",
    queries,
  });
  return categories;
}

// idに該当するカテゴリを取得
export async function getCategoryDetail(
  contentId: string,
  queries?: MicroCMSQueries
) {
  const categoriesDetail = await microCMSClient.getListDetail<CategoryName>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: "categories",
    contentId,
    queries,
  });
  return categoriesDetail;
}

// タグ一覧を取得
export async function getTags(queries?: MicroCMSQueries) {
  const tags = await microCMSClient.getList<TagName>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: "tags",
    queries,
  });
  return tags;
}

// idに該当するタグを取得
export async function getTagDetail(
  contentId: string,
  queries?: MicroCMSQueries
) {
  const tagDetail = await microCMSClient.getListDetail<TagName>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: "tags",
    contentId,
    queries,
  });
  return tagDetail;
}
