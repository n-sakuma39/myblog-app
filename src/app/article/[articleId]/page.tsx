import { getArticles, getArticlesDetail } from "@/libs/microcms";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/layouts/Article/ArticleSyntaxHight";
import styles from "@/styles/app/article/article.module.scss";
import articleStyle from "@/styles/components/layouts/Article/ArticleItem.module.scss";
import { format, parseISO } from "date-fns";
import { LinkButton } from "@/components/elements/Button";

type Props = {
  params: { articleId: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.articleId;
  const article = await getArticlesDetail(id);
  return {
    title: article.title,
  };
}

export async function generateStaticParams() {
  const { contents } = await getArticles();
  const paths = contents.map((article) => {
    return {
      article: article.id,
    };
  });
  return paths;
}

export default async function Article(props: Props) {
  const article = await getArticlesDetail(props.params.articleId);

  if (!article) {
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
          />
          <span className={articleStyle.worksCategory}>
            {article.categories[0].name}
          </span>
        </div>
        <div className={articleStyle.worksInner}>
          <p className={`${articleStyle.worksTag} ${styles.border}`}>
            {article.tags.map((tag, index) => (
              <span key={index}>{tag.name}</span>
            ))}
          </p>
          <div className={styles.article}>
            <ArticleContent content={article.content} />
          </div>
        </div>
        <LinkButton href="/article/" text="ブログ一覧へ" />
      </article>
    </main>
  );
}
