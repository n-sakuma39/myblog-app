## 概要

- 個人ポートフォリオサイト

## 技術スタック

- Next.js（14.2.3）
- microCMS
- TypeScript
- CSS module
- Node.js（16.14.0）
- GitHub
- Vercel

## 主な使用ライブラリ

- date-fns
- html-react-parser
- microcms-js-sdk
- nodemailer
- prismjs
- react-hook-form
- react-icons
- react-toastify
- sass
- sharp

## 実装機能

- ブログ記事の一覧表示、詳細表示
- カテゴリ別、タグ別のフィルタリング
- ブログ一覧ページのページネーション
- お問い合わせフォーム

## フォルダ構成

myblog-app/
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.tsx
│ │ ├── api/
│ │ │ └── contact/
│ │ │ └── route.ts
│ │ ├── article/
│ │ │ ├── [articleId]/
│ │ │ │ └── page.tsx
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ ├── category/
│ │ │ ├── [categoryId]/
│ │ │ │ └── page.tsx
│ │ │ └── layout.tsx
│ │ ├── contact/
│ │ │ └── page.tsx
│ │ ├── tag/
│ │ │ ├── [tagid]/
│ │ │ │ └── page.tsx
│ │ │ └── layout.tsx
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ ├── elements/
│ │ │ └── Button.tsx
│ │ ├── layouts/
│ │ │ ├── Article/
│ │ │ │ ├── ArticleCard.tsx
│ │ │ │ ├── ArticleItem.module.scss
│ │ │ │ ├── ArticleList.tsx
│ │ │ │ ├── ArticlePagination.module.scss
│ │ │ │ ├── ArticleSideBar.module.scss
│ │ │ │ ├── ArticleSideBar.tsx
│ │ │ ├── ArticleSyntaxHight.scss
│ │ │ │ └── ArticleSyntaxHight.tsx
│ │ │ ├── ContactForm/
│ │ │ │ └── ContactForm.tsx
│ │ │ ├── Footer/
│ │ │ │ ├── Footer.module.scss
│ │ │ │ └── Footer.tsx
│ │ │ └── Header/
│ │ │ ├── Header.module.scss
│ │ │ └── Header.tsx
│ ├── config/
│ │ └── paginationSettings.ts
│ ├── libs/
│ │ └── microcms.ts
│ ├── styles/
│ │ ├── app/
│ │ │ ├── about/
│ │ │ │ └── about.module.scss
│ │ │ ├── article/
│ │ │ │ └── article.module.scss
│ │ │ ├── contact/
│ │ │ │ └── contact.module.scss
│ │ │ ├── globals/
│ │ │ │ └── globals.scss
│ │ │ ├── top/
│ │ │ └── top.module.scss
│ │ └── components/
│ │ └── layouts/
│ │ ├── Article/
│ │ │ └── ArticleItem.module.scss
│ │ ├── Footer/
│ │ │ └── Footer.module.scss
│ │ └── Header/
│ │ └── Header.module.scss
│ ├── types/
│ │ └── articleType.ts
│ └── utils/
├── public/
│ └── images/
│ ├── icon_clock.svg
│ └── icon_tag.svg
├── .gitignore
├── next.config.mjs
├── package.json
├── tsconfig.json
└── typed-scss-modules.config.ts

## コメント

Next.js14 と microCMS を使ったポートフォリオサイト。  
TOP ページ、BLOG ページ、ABOUT ページ、お問い合わせページと構成されています。  
ブログページは microCMS を使っていて、主にこちらを中心に今後個人開発したものや技術情報などを公開予定。

## 著者

[SakuTech blog](https://github.com/n-sakuma39/)
