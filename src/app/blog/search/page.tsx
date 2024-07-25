import { getBlog } from "@/app/_libs/microcms";
import styles from "@/app/blog/page.module.scss";
import BlogList from "@/app/_components/layouts/Blog/CardList";
import Pagination from "@/app/_components/layouts/Blog/Pagination";
import { use } from "react";
import { PAR_PAGE } from "@/app/_constants";
import { LinkButton } from "@/app/_components/elements/Button";

type Props = {
  searchParams: {
    q?: string;
    page?: string;
  };
};

const BlogPage = ({ searchParams }: Props) => {
  const page = Number(searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getBlog({
      offset: (page - 1) * PAR_PAGE,
      limit: PAR_PAGE,
      q: searchParams.q,
    })
  );

  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">BLOG</h2>
          <BlogList isTopPage={false} articles={contents} />
          {totalPages > 1 && (
            <Pagination total={totalPages} currentPage={page} />
          )}
        </div>
        <LinkButton href="/blog/" text="ブログ一覧へ" />
      </section>
    </main>
  );
};

export default BlogPage;
