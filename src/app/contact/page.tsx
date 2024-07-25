import ContactForm from "@/app/_components/layouts/ContactForm";
import styles from "./page.module.scss";

const page = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.formContainer}>
          <h2 className="title">CONTACT</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default page;
