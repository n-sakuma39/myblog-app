import { use } from "react";
import styles from "@/styles/app/article/article.module.scss";
import { getCategories, getTags } from "@/libs/microcms";
import ArticleSideBar from "@/components/layouts/Article/ArticleSideBar";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contents: categories } = use(getCategories());
  const { contents: tags } = use(getTags());

  return (
    <div className={styles["article-box"]}>
      {children}
      <ArticleSideBar categories={categories} tags={tags} />
    </div>
  );
}
