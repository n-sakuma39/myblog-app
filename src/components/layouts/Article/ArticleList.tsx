import { getArticles } from "@/libs/microcms";
import ArticleItem from "./ArticleCard";
import { Article } from "@/types/articleType";
import styles from "@/styles/components/layouts/Article/ArticleItem.module.scss";

const ArticleList = async ({
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
  const { contents } = await getArticles(query);
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
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
