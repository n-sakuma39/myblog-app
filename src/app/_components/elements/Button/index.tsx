import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

type LinkButtonProps = {
  href: string;
  text: string;
};

export const LinkButton: FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <div className={styles["btn-more"]}>
      <Link href={href}>{text}</Link>
    </div>
  );
};
