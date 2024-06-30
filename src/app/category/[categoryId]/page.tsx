import { use } from "react";
import { getArticles, getCategoryDetail } from "@/libs/microcms";
import { Metadata } from "next";
import styles from "@/styles/app/article/article.module.scss";
import ArticleList from "@/components/layouts/Article/ArticleList";
import ArticlePagination from "@/components/layouts/Article/ArticlePagination";
import { PAR_PAGE } from "@/config/paginationSettings";
import { LinkButton } from "@/components/elements/Button";

type Props = {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId;
  const category = await getCategoryDetail(id);
  return {
    title: `「${category.name}」記事一覧 | SakuTech blog`,
  };
}

export default function CategoryArticleList(props: Props) {
  const page = Number(props.searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getArticles({
      offset: (page - 1) * PAR_PAGE,
      limit: PAR_PAGE,
      filters: `categories[contains]${props.params.categoryId}`,
    })
  );
  const category = use(getCategoryDetail(props.params.categoryId));

  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">「{category.name}」記事一覧</h2>
          <ArticleList
            isTopPage={false}
            categoryId={props.params.categoryId}
            articles={contents}
          />
          {totalPages > 1 && (
            <ArticlePagination total={totalPages} currentPage={page} />
          )}
          <LinkButton href="/article/" text="ブログ一覧へ" />
        </div>
      </section>
    </main>
  );
}
