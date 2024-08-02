import { getBlog } from "@/app/_libs/microcms";
import styles from "@/app/blog/page.module.scss";
import dynamic from 'next/dynamic';
import { PAR_PAGE } from "@/app/_constants";
import { LinkButton } from "@/app/_components/elements/Button";

const BlogList = dynamic(() => import('@/app/_components/layouts/Blog/CardList'), {
  loading: () => <p>Loading...</p>,
});

const Pagination = dynamic(() => import('@/app/_components/layouts/Blog/Pagination'), {
  loading: () => <p>Loading...</p>,
});

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const BlogPage = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page ?? "1");
  const { contents, totalCount } = await getBlog({
    offset: (page - 1) * PAR_PAGE,
    limit: PAR_PAGE,
    ...searchParams,
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
            <p>現在、記事はありません。</p>
          )}
          <LinkButton href="/blog/" text="ブログ一覧へ" />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;