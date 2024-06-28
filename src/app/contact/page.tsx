import ContactForm from "@/components/layouts/ContactForm/ContactForm";
import styles from "@/styles/app/contact/contact.module.scss";

const page = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>CONTACT</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default page;
