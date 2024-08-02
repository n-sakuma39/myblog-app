import { use } from "react";
import { getBlog, getCategoryDetail } from "@/app/_libs/microcms";
import { Metadata } from "next";
import styles from "@/app/blog/page.module.scss";
import BlogList from "@/app/_components/layouts/Blog/CardList";
import Pagination from "@/app/_components/layouts/Blog/Pagination";
import { PAR_PAGE } from "@/app/_constants";
import { LinkButton } from "@/app/_components/elements/Button";
import { CategoryName } from "@/app/_types/blog";

type Props = {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId;
  const category = await getCategoryDetail(id);
  if (!category || !('name' in category)) {
    return {
      title: "カテゴリーが見つかりません | SakuTech blog",
    };
  }
  return {
    title: `「${category.name}」記事一覧 | SakuTech blog`,
  };
}

export default function CategoryBlogList(props: Props) {
  const page = Number(props.searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getBlog({
      offset: (page - 1) * PAR_PAGE,
      limit: PAR_PAGE,
      filters: `categories[contains]${props.params.categoryId}`,
    })
  );
  const category = use(getCategoryDetail(props.params.categoryId)) as CategoryName;

  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  if (!category || !('name' in category)) {
    return <div>カテゴリーが見つかりません</div>;
  }

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">「{category.name}」記事一覧</h2>
          <BlogList
            isTopPage={false}
            categoryId={props.params.categoryId}
            articles={contents}
          />
          {totalPages > 1 && (
            <Pagination total={totalPages} currentPage={page} />
          )}
          <LinkButton href="/blog/" text="ブログ一覧へ" />
        </div>
      </section>
    </main>
  );
}