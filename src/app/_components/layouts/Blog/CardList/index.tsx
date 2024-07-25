import { getBlog } from "@/app/_libs/microcms";
import BlogItem from "../Card";
import { Article } from "@/app/_types/blog";
import styles from "./index.module.scss";

const BlogList = async ({
  isTopPage,
  articles,
  categoryId,
  tagid,
}: {
  isTopPage: boolean;
  articles?: Article[];
  categoryId?: string;
  tagid?: string;
}) => {
  const query = {
    filters: `${categoryId ? `categories[contains]${categoryId}` : ""}${
      tagid ? `tags[contains]${tagid}` : ""
    }`,
  };
  const { contents } = await getBlog(query);
  const articlesToShow = articles || contents;
  const displayedArticles = isTopPage
    ? articlesToShow.slice(0, 3)
    : articlesToShow;

  return (
    <div className={styles.worksContainer}>
      <ul
        className={`${styles.worksList} ${
          isTopPage ? styles.worksListTop : ""
        }`}
      >
        {displayedArticles.map((article) => (
          <BlogItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
