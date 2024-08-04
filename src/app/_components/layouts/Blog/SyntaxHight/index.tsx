"use client";
import parse from "html-react-parser";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism-dark.css";
import styles from "./index.module.scss";

// シンタックスハイライト言語別インポート
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";

type Props = {
  content: string;
};

export default function BlogContent(props: Props) {
  useEffect(() => {
    Prism.highlightAll();

    const codeElements = document.querySelectorAll("[data-filename]");
    codeElements.forEach((codeElement) => {
      const filename = codeElement.getAttribute("data-filename");
      const spanElement = document.createElement("span");
      spanElement.textContent = filename;
      spanElement.className = styles["code-block-filename"];
      codeElement.prepend(spanElement);
    });
  }, []);
  return parse(props.content);
}