# SakuTech blog

## 概要

Next.js 14 と microCMS を使用した個人ポートフォリオ＆ブログサイトです。

主な機能：

- ブログ記事の投稿・管理（microCMS 連携）
- カテゴリー別、タグ別のフィルタリング
- 記事検索機能
- ページネーション
- お問い合わせフォーム（Gmail 連携）

## 技術スタック

### フレームワーク・言語

- Next.js 14.2.3
- TypeScript 5.0.0
- Node.js 20.9.0

### パッケージマネージャー

- npm 9.1.2
- yarn 1.22.22

### スタイリング

- CSS Modules
- Sass
- CSS 最適化（critters）

### CMS・API

- microCMS（ヘッドレス CMS）
- nodemailer（メール送信）

### デプロイ

- Vercel
- GitHub

## 環境変数

microCMS

- NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=
- NEXT_PUBLIC_MICROCMS_API_KEY=

Gmail

- NODEMAILER_EMAIL=
- NODEMAILER_PASSWORD=
- CONTACT_RECEIVE_EMAIL=

その他

- SLACK_WEBHOOK_URL=

## 開発環境構築

### 必要要件

- Node.js 20.9.0
- npm または yarn

### セットアップ手順

1. リポジトリのクローン

```bash
git clone https://github.com/n-sakuma39/myblog-app.git
cd myblog-app
```

2. 依存パッケージのインストール

```bash
npm install
or
yarn install
```

3. 環境変数の設定

```bash
cp .env.example .env.local
```

4. 開発サーバーの起動

```bash
npm run dev
or
yarn dev
```

## 利用可能なコマンド

```bash
開発サーバー起動
npm run dev
```

```bash
SCSS タイプ定義の自動生成
npm run dev:scss
```

```bash
プロダクションビルド
npm run build
```

```bash
プロダクションサーバー起動
npm run start
```

## ディレクトリ構成

src/
├── app/
│ ├── components/ # 共通コンポーネント
│ ├── constants/ # 定数
│ ├── libs/ # ユーティリティ関数
│ ├── types/ # 型定義
│ ├── about/ # About ページ
│ ├── blog/ # ブログページ
│ ├── contact/ # お問い合わせページ
│ └── api/ # API ルート
├── styles/ # グローバルスタイル
public/ # 静的ファイル

# ライセンス

[MIT License](LICENSE)

## 作者

[SakuTech blog](https://github.com/n-sakuma39/)
