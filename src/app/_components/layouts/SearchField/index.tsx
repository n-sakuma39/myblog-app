"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchFieldComponents() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/blog/search?${params.toString()}`);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.search}>
        <Image
          src="/images/search.svg"
          alt="検索"
          width={16}
          height={16}
          priority
          sizes="100vw"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponents />
    </Suspense>
  );
}
