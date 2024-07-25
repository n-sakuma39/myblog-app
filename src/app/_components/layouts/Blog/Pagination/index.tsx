import Link from "next/link";
import styles from "./index.module.scss";
import { PAR_PAGE } from "@/app/_constants";
type Props = {
  total: number;
  currentPage: number;
};

const Pagination: React.FC<Props> = ({ total, currentPage }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === total;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(total, currentPage + 2);

  if (currentPage <= 2) {
    startPage = 1;
    endPage = Math.min(total, PAR_PAGE);
  } else if (currentPage > total - 2) {
    startPage = Math.max(1, total - (PAR_PAGE - 1));
    endPage = total;
  }

  return (
    <div className={styles.pagination}>
      <ul>
        <li className={`${styles.total} ${isFirst ? styles.disabled : ""}`}>
          {isFirst ? <span>最初へ</span> : <Link href={`?page=1`}>最初へ</Link>}
        </li>
        <li className={isFirst ? styles.disabled : ""}>
          {isFirst ? (
            <span>&lt;</span>
          ) : (
            <Link href={`?page=${currentPage - 1}`}>&lt;</Link>
          )}
        </li>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <li key={page}>
            <Link
              className={currentPage === page ? styles.active : ""}
              href={`?page=${page}`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li className={isLast ? styles.disabled : ""}>
          {isLast ? (
            <span>&gt;</span>
          ) : (
            <Link href={`?page=${currentPage + 1}`}>&gt;</Link>
          )}
        </li>
        <li className={`${styles.total} ${isLast ? styles.disabled : ""}`}>
          {isLast ? (
            <span>最後へ</span>
          ) : (
            <Link href={`?page=${total}`}>最後へ</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
