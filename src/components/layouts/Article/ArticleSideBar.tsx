import React from "react";
import styles from "@/styles/components/layouts/Article/ArticleSideBar.module.scss";
import { CategoryName, TagName } from "@/types/articleType";
import Link from "next/link";

type Props = {
  categories: CategoryName[];
  tags: TagName[];
};

export default function ArticleSideBar(props: Props) {
  return (
    <div className={styles.sidebar}>
      {props.categories.length > 0 && (
        <section className="side-list">
          <h3>カテゴリ一覧</h3>
          <ul className={styles.categoryList}>
            {props.categories.map((category) => (
              <li key={category.id}>
                <Link href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="side-list">
        <h3>タグ一覧</h3>
        <ul className={styles.tagList}>
          {props.tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tag/${tag.id}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
