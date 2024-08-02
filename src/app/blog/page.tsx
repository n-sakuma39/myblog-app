import { getBlog } from "@/app/_libs/microcms";
import styles from "@/app/blog/page.module.scss";
import BlogList from "@/app/_components/layouts/Blog/CardList";
import Pagination from "@/app/_components/layouts/Blog/Pagination";
import { use } from "react";
import { PAR_PAGE } from "@/app/_constants";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const BlogPage = (props: Props) => {
  const page = Number(props.searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getBlog({
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
          {contents.length > 0 ? (
            <BlogList isTopPage={false} articles={contents} />
          ) : (
            <p>現在、記事はありません。</p>
          )}
          {totalPages > 1 && (
            <Pagination total={totalPages} currentPage={page} />
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;