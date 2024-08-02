import { getBlog, getBlogDetail } from "@/app/_libs/microcms";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "@/app/blog/page.module.scss";
import articleStyle from "@/app/_components/layouts/Blog/CardList/index.module.scss";
import { format, parseISO } from "date-fns";
import { LinkButton } from "@/app/_components/elements/Button";
import { Suspense } from "react";

type Props = {
  params: {
    articleId: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const id = params.articleId;
  const article = await getBlogDetail(id, {
    draftKey: searchParams.dk,
  });
  if (!article || !('title' in article)) {
    return {
      title: "記事が見つかりません",
    };
  }
  return {
    title: article.title,
  };
}

export async function generateStaticParams() {
  const { contents } = await getBlog();
  return contents.map((article) => ({
    articleId: article.id,
  }));
}

const BlogContent = dynamic(
  () => import("@/app/_components/layouts/Blog/SyntaxHight"),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default async function Blog({ params, searchParams }: Props) {
  const article = await getBlogDetail(params.articleId, {
    draftKey: searchParams.dk,
  });

  if (!article || !('title' in article)) {
    notFound();
  }

  return (
    <main className={articleStyle.worksItem}>
      <article className={styles["detail-box"]}>
        <h1>{article.title}</h1>
        <div className={styles.date}>
          <p className={articleStyle.publishedAt}>
            {format(
              parseISO(article.publishedAt ?? "1970-01-01"),
              "yyyy年MM月dd日"
            )}
          </p>
        </div>
        <div className={`${articleStyle.worksImg} ${styles.worksImg}`}>
          <Image
            src={article.eyecatch?.url ?? "/images/no-image.png"}
            alt=""
            width={400}
            height={300}
            priority
            sizes="100vw"
          />
          <span className={articleStyle.worksCategory}>
            {article.categories[0].name}
          </span>
        </div>
        <div className={`${articleStyle.worksInner} ${styles.worksInner}`}>
          <p className={`${articleStyle.worksTag} ${styles.border}`}>
            {article.tags?.map((tag, index) => (
              <span key={index}>{tag.name}</span>
            )) || "No Tags"}
          </p>
          <div className={styles.article}>
            <Suspense>
              <BlogContent content={article.content} />
            </Suspense>
          </div>
        </div>
        <LinkButton href="/blog/" text="ブログ一覧へ" />
      </article>
    </main>
  );
}