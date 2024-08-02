import styles from "@/app/page.module.scss";
import Image from "next/image";
import { LinkButton } from "@/app/_components/elements/Button";
import BlogList from "@/app/_components/layouts/Blog/CardList";
import { getBlog } from "@/app/_libs/microcms";

export default async function Home() {
  const { contents } = await getBlog({ limit: 3 });

  return (
    <main className={styles.topContainer}>
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
          {contents.length > 0 ? (
            <>
              <BlogList isTopPage={true} articles={contents} />
              <LinkButton href="/blog/" text="ブログ一覧" />
            </>
          ) : (
            <p className={styles.notfound}>現在、表示できる記事はありません。</p>
          )}
        </div>
      </section>
      <section className={`${styles.profile} section`}>
        <div className="inner-box">
          <h2 className="title">ABOUT</h2>
          <div className={styles.profile}>
            <p className={styles.profileImg}>
              <Image
                src="/images/about.png"
                alt="Profile Image"
                width={400}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, 400px"
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
          <LinkButton href="/contact/" text="お問い合わせはこちら" />
        </div>
      </section>
    </main>
  );
}