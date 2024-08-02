import { use } from "react";
import { getBlog, getTagDetail } from "@/app/_libs/microcms";
import { Metadata } from "next";
import styles from "@/app/blog/page.module.scss";
import BlogList from "@/app/_components/layouts/Blog/CardList";
import Pagination from "@/app/_components/layouts/Blog/Pagination";
import { PAR_PAGE } from "@/app/_constants";
import { LinkButton } from "@/app/_components/elements/Button";
import { TagName } from "@/app/_types/blog";

type Props = {
  params: { tagid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.tagid;
  const tag = await getTagDetail(id);
  
  if (!tag || !('name' in tag)) {
    return {
      title: "タグが見つかりません | SakuTech blog",
    };
  }
  
  return {
    title: `「${tag.name}」記事一覧 | SakuTech blog`,
  };
}

export default function TagBlogList(props: Props) {
  const page = Number(props.searchParams.page ?? "1");
  const { contents, totalCount } = use(
    getBlog({
      offset: (page - 1) * PAR_PAGE,
      limit: PAR_PAGE,
      filters: `tags[contains]${props.params.tagid}`,
    })
  );
  const tag = use(getTagDetail(props.params.tagid)) as TagName;
  const totalPages = Math.ceil(totalCount / PAR_PAGE);

  if (!tag || !('name' in tag)) {
    return <div>タグが見つかりません</div>;
  }

  return (
    <main className={styles.worksImg}>
      <section>
        <div className="inner-box">
          <h2 className="title">{tag.name}の記事一覧</h2>
          <BlogList
            isTopPage={false}
            tagid={props.params.tagid}
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