import { getBlog } from "@/app/_libs/microcms";
import styles from "@/app/blog/page.module.scss";
import BlogList from "@/app/_components/layouts/Blog/CardList";
import Pagination from "@/app/_components/layouts/Blog/Pagination";
import { PAR_PAGE } from "@/app/_constants";
import { LinkButton } from "@/app/_components/elements/Button";

type Props = {
  searchParams: {
    q?: string;
    page?: string;
  };
};

const BlogPage = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page ?? "1");
  const { contents, totalCount } = await getBlog({
    offset: (page - 1) * PAR_PAGE,
    limit: PAR_PAGE,
    q: searchParams.q,
  });

  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">BLOG</h2>
          {contents.length > 0 ? (
            <>
              <BlogList isTopPage={false} articles={contents} />
              {totalPages > 1 && (
                <Pagination total={totalPages} currentPage={page} />
              )}
            </>
          ) : (
            <p>
              {searchParams.q
                ? "検索結果はありません。別のキーワードをお試しください。"
                : "現在、表示できる記事はありません。"}
            </p>
          )}
          <LinkButton href="/blog/" text="ブログ一覧へ" />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;