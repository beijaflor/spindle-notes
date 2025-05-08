# Spindle Notes

URLを含むテーマ別ノートを作成し、チャット形式でリサーチを行うためのツールです。ノートをプロジェクトとして整理し、AIを活用して効率的に情報を整理・分析します。

## 特徴

- 複数のURLをノートとして登録・整理
- テーマごとのノート分割・管理
- AIによるノート間の関連性分析
- プロジェクト単位でのノート管理

## 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- pnpm 10.8.1以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/spindle-notes.git
cd spindle-notes

# 依存関係のインストール
pnpm install
```

### 開発コマンド

```bash
# 開発サーバーの起動 (実装後に利用可能)
pnpm dev

# TypeScriptエラーのチェック
pnpm typecheck

# コードのリント
pnpm lint

# コードのフォーマット
pnpm format

# Commitizen を使用したコミット
pnpm commit
```

## 技術スタック

- **フロントエンド**: TanStack Start, TailwindCSS
- **バックエンド**: Hono API フレームワーク (Vercel Functions)
- **データベース**: Supabase Postgres
- **認証**: Supabase Auth (Magic Link)
- **CI/CD**: GitHub Actions（プッシュ時にLintとType Check）

## ドキュメント

詳細なドキュメントは `docs/` ディレクトリにあります。主要なドキュメント：

- [プロジェクトの目的](docs/01_purpose.md)
- [データモデリング](docs/02_data_modeling.md)
- [インフラストラクチャ](docs/03_infrastructure.md)
- [API設計](docs/04_api_design.md)

## ライセンス

ISC