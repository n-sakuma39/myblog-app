import { use } from "react";
import styles from "@/app/blog/page.module.scss";
import { getCategories, getTags } from "@/app/_libs/microcms";
import SideBar from "@/app/_components/layouts/Blog/SideBar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contents: categories } = use(getCategories());
  const { contents: tags } = use(getTags());

  return (
    <div className={styles["article-box"]}>
      {children}
      <SideBar categories={categories} tags={tags} />
    </div>
  );
}
