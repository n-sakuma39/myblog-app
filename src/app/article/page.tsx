import { getArticles } from "@/libs/microcms";
import styles from "@/styles/app/article/article.module.scss";
import ArticleList from "@/components/layouts/Article/ArticleList";
import ArticlePagination from "@/components/layouts/Article/ArticlePagination";
import { use } from "react";
import { PAR_PAGE } from "@/config/paginationSettings";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const BlogPage = (props: Props) => {
  const page = Number(props.searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getArticles({
      offset: (page - 1) * PAR_PAGE,
      limit: PAR_PAGE,
      ...props.searchParams,
    })
  );

  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">BLOG</h2>
          <ArticleList isTopPage={false} articles={contents} />
          {totalPages > 1 && (
            <ArticlePagination total={totalPages} currentPage={page} />
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
