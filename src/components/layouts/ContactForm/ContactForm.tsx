"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "@/styles/app/contact/contact.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    toast.info("送信中です…");
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.dismiss();
      toast.success("送信が完了しました。");
      router.push("/");
    } catch (error) {
      toast.dismiss();
      toast.error("送信に失敗しました。");
    }
  };

  return (
    <div className={styles.formInner}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formItem}>
          <label htmlFor="name" className={styles.label}>
            氏名<span className={styles.kome}>*</span>
          </label>
          <input
            {...register("name", { required: true })}
            className={styles.input}
            type="text"
          />
          {errors.name && (
            <p className={styles.errorMessage}>お名前を記入してください。</p>
          )}
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email" className={styles.label}>
            メールアドレス<span className={styles.kome}>*</span>
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            className={styles.input}
            type="email"
          />
          {errors.email && (
            <p className={styles.errorMessage}>
              有効なメールアドレスを入力してください。
            </p>
          )}
        </div>
        <div className={styles.formItem}>
          <label htmlFor="message" className={styles.label}>
            お問い合わせ内容<span className={styles.kome}>*</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            className={styles.textarea}
          ></textarea>
          {errors.message && (
            <p className={styles.errorMessage}>
              お問い合わせ内容を入力してください。
            </p>
          )}
        </div>
        <button type="submit" className={styles.btn}>
          送信
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
