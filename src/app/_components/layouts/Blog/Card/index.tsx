import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { BlogItemProps } from "@/app/_types/blog";
import styles from "@/app/_components/layouts/Blog/CardList/index.module.scss";

const BlogItem = ({ article }: BlogItemProps) => {
  return (
    <li className={styles.worksItem}>
      <Link href={`/blog/${article.id}`}>
        <div className={styles.worksImg}>
          <Image
            src={article.eyecatch?.url ?? "/images/no-image.png"}
            alt=""
            width={400}
            height={300}
            priority
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <span className={styles.worksCategory}>
            {article.categories[0].name}
          </span>
        </div>
        <div className={styles.worksInner}>
          <h3 className={styles.worksName}>{article.title}</h3>
          <p className={styles.publishedAt}>
            {format(
              parseISO(article.publishedAt ?? "1970-01-01"),
              "yyyy年MM月dd日"
            )}
          </p>
          <p className={styles.worksTag}>
            {article.tags.map((tag, index) => (
              <span key={index}>{tag.name}</span>
            ))}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;