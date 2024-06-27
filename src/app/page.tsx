import styles from "@/styles/app/top/top.module.scss";
import Image from "next/image";
import { LinkButton } from "@/components/elements/Button";
import ArticleList from "@/components/layouts/Article/ArticleList";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles["inner-box"]}>
          <p className={styles["txt-name"]}>NAOTO SAKUMA</p>
          <p className={styles["txt-sub"]}>Portfolio</p>
          <p className={styles["txt-comment"]}>
            ユーザーとお客様が心から
            <br className="util-sp-indention" />
            満足できるサイトを構築します。
            <br />
            クリエイティブなビジョンを実現する
            <br className="util-sp-indention" />
            フロントエンジニア。
          </p>
        </div>
      </section>
      <section className={`${styles.blog} section`}>
        <div className="inner-box">
          <h2 className="title">BLOG</h2>
          <ArticleList isTopPage={true} />
          <LinkButton href="/article/" text="ブログ一覧" />
        </div>
      </section>
      <section className={`${styles.profile} section`}>
        <div className="inner-box">
          <h2 className="title">ABOUT</h2>
          <div className={styles.profile}>
            <p className={styles.profileImg}>
              <Image
                src="/images/profile.png"
                alt=""
                width={400}
                height={400}
              />
            </p>
            <div className={styles.profileBody}>
              <p>
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストがりますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
              </p>
            </div>
          </div>
          <LinkButton href="/about/" text="詳細はこちら" />
        </div>
      </section>

      <section className={`${styles.contact} section`}>
        <div className="inner-box">
          <h2 className="title">CONTACT</h2>
          <p>
            お問い合わせは、
            <br className="util-sp-indention" />
            下記リンク先フォームからお願いいたします。
          </p>
        </div>
        <LinkButton href="/contact/" text="お問い合わせはこちら" />
      </section>
    </main>
  );
}
