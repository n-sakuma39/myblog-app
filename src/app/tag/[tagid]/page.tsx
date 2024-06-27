import { use } from "react";
import { getArticles, getTagDetail } from "@/libs/microcms";
import { Metadata } from "next";
import styles from "@/styles/app/article/article.module.scss";
import ArticleList from "@/components/layouts/Article/ArticleList";
import ArticlePagination from "@/components/layouts/Article/ArticlePagination";
import { PAR_PAGE } from "@/config/paginationSettings";

type Props = {
  params: { tagid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.tagid;
  const tag = await getTagDetail(id);
  //console.log("propsの内容確認:", props);
  return {
    title: `[${tag.name}]タグの記事一覧 | 39 MY BLOG`,
  };
}

export default function TagArticleList(props: Props) {
  const page = Number(props.searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getArticles({
      offset: (page - 1) * PAR_PAGE,
      limit: PAR_PAGE,
      filters: `tags[contains]${props.params.tagid}`,
    })
  );
  const tag = use(getTagDetail(props.params.tagid));
  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">{tag.name}の記事一覧</h2>
          <ArticleList
            isTopPage={false}
            tagid={props.params.tagid}
            articles={contents}
          />
          {totalPages > 1 && (
            <ArticlePagination total={totalPages} currentPage={page} />
          )}
        </div>
      </section>
    </main>
  );
}
