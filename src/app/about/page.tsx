import Image from "next/image";
import styles from "@/styles/app/about/about.module.scss";

const about = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className="box">
          <h2 className="title">ABOUT</h2>
          <div className={styles.innerBox}>
            <div className={styles.about}>
              <p className={styles.aboutImg}>
                <Image
                  src="/images/about.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </p>
              <div className={styles.aboutBody}>
                <h3>NAOTO SAKUMA</h3>
                <dl className={styles.aboutDetail}>
                  <dt>職 種：</dt>
                  <dd>フロントエンドエンジニア</dd>
                </dl>
                <dl className={styles.aboutDetail}>
                  <dt>スキル：</dt>
                  <dd>
                    HTML、CSS、JavaScript、TypeScript、WordPress、PHP(Laravel)など
                  </dd>
                </dl>
                <dl className={styles.aboutDetail}>
                  <dt>作業ツール：</dt>
                  <dd>VSCode、Git、Node.js、Docker、XD、PhotoShopなど</dd>
                </dl>
              </div>
            </div>
            <p className={styles.txtBox}>
              大学時代にアルバイトにてWEB制作を始める。
              <br />
              大学卒業後に、WEB制作の会社に入社しコーダーとして業務を行う。
              <br />
              キャリアを積み、フリーランスなども経て、現在はフロントエンジニアとして制作に携わる。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default about;
