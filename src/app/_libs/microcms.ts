import { Article, CategoryName, TagName } from "@/app/_types/blog";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || 'dummy',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || 'dummy',
});

// 共通のリクエスト関数
async function fetchList<T>(
  endpoint: string,
  queries?: MicroCMSQueries,
  revalidate: number = 0
) {
  try {
    const data = await client.getList<T>({
      customRequestInit: {
        next: {
          revalidate,
        },
      },
      endpoint,
      queries,
    });
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // フォールバックデータを返す
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 10,
    };
  }
}

async function fetchListDetail<T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries,
  revalidate: number = 0
) {
  try {
    const data = await client.getListDetail<T>({
      customRequestInit: {
        next: {
          revalidate,
        },
      },
      endpoint,
      contentId,
      queries,
    });
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // フォールバックデータを返す
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 10,
    };
  }
}

// 記事一覧の取得
export async function getBlog(queries?: MicroCMSQueries) {
  return await fetchList<Article>("blog", queries, 60);
}

// 特定の記事を取得
export async function getBlogDetail(
  contentId: string,
  queries?: MicroCMSQueries
) {
  return await fetchListDetail<Article>("blog", contentId, queries, 60);
}

// カテゴリ一覧を取得
export async function getCategories(queries?: MicroCMSQueries) {
  return await fetchList<CategoryName>("categories", queries);
}

// idに該当するカテゴリを取得
export async function getCategoryDetail(
  contentId: string,
  queries?: MicroCMSQueries
) {
  return await fetchListDetail<CategoryName>("categories", contentId, queries);
}

// タグ一覧を取得
export async function getTags(queries?: MicroCMSQueries) {
  return await fetchList<TagName>("tags", queries);
}

// idに該当するタグを取得
export async function getTagDetail(
  contentId: string,
  queries?: MicroCMSQueries
) {
  return await fetchListDetail<TagName>("tags", contentId, queries);
}