# モノレポ構造設計

## 概要

Spindle Notesプロジェクトをモノレポ構造で実装するための設計ドキュメントです。モノレポ（monorepo）は複数のパッケージを単一のリポジトリで管理する方法で、コード共有、依存関係管理、開発ワークフローの一貫性を向上させることができます。

## モノレポツール選定

### 推奨ツール: Turborepo

[Turborepo](https://turbo.build/)は、Vercelが開発しているモノレポ管理ツールで、高速なビルド、キャッシュ機能、タスク間の依存関係管理ができます。Next.jsとの親和性が高く、Vercelへのデプロイも容易です。

利点:

- インクリメンタルビルドとキャッシングによる高速な開発体験
- リモートキャッシュによるCI/CDの高速化
- シンプルな設定と使いやすいAPI
- Vercelとの統合が優れている

### 代替ツール

- **pnpm workspaces**: より軽量な構成が好ましい場合
- **Nx**: より複雑なモノレポ管理が必要な場合
- **Lerna + Yarn Workspaces**: 成熟したツールでより多くのカスタマイズが必要な場合

## フォルダ構成

```
spindle-notes/
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── turbo.json                # Turborepo設定
├── package.json              # ルートパッケージ設定
├── tsconfig.json             # ベースTypeScript設定
├── apps/                     # アプリケーション
│   ├── web/                  # フロントエンドアプリ
│   │   ├── package.json
│   │   ├── next.config.js
│   │   └── src/
│   └── api/                  # APIサーバー
│       ├── package.json
│       └── src/
├── packages/                 # 共有パッケージ
│   ├── ui/                   # UIコンポーネントライブラリ
│   │   ├── package.json
│   │   └── src/
│   ├── eslint-config/        # 共有ESLint設定
│   │   ├── package.json
│   │   └── index.js
│   └── typescript-config/    # 共有TypeScript設定
│       ├── package.json
│       └── base.json
└── docs/                     # プロジェクトドキュメント
```

## パッケージ構成

### apps

実行可能なアプリケーション群を格納するディレクトリです。

#### web (フロントエンド)

- **技術スタック**: Next.js, React, TailwindCSS
- **役割**: ユーザーインターフェース、認証、クライアントサイドの状態管理

#### api (バックエンド)

- **技術スタック**: Hono, Vercel Functions
- **役割**: RESTful API、データベース操作、認証検証

### packages

再利用可能なコードを含むパッケージを格納するディレクトリです。

#### ui

- 共有可能なUIコンポーネント
- スタイリングとアクセシビリティの共通ルール
- コンポーネントのストーリーブック

#### eslint-config

- 共有ESLint設定
- コーディングスタンダード

#### typescript-config

- 共有TypeScript設定
- 異なるプロジェクト種類に対する設定拡張

### バージョニング戦略

- すべてのパッケージで同じバージョンを使用（ワークスペース単位でのバージョン管理）
- 内部パッケージの依存関係は `workspace:*` で指定

## 開発ワークフロー

### スクリプト定義

ルートの`package.json`で以下のようなスクリプトを定義します:

```json
{
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "test": "turbo test",
    "clean": "turbo clean && rm -rf node_modules"
  }
}
```

### Turborepoタスク設定

`turbo.json`で以下のようなタスク設定を行います:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {  // 注意: Turborepo v2以降では "pipeline" ではなく "tasks" を使用
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"]
    },
    "typecheck": {
      "outputs": []
    },
    "clean": {
      "cache": false
    }
  }
}
```

## CI/CD統合

### GitHub Actions

- Pull Requestごとのビルド・テストの実行
- TurborepoのリモートキャッシュによるCI高速化
- 各アプリの個別デプロイ設定

### Vercel統合

- モノレポ内の各アプリケーションを個別のVercelプロジェクトとして設定
- Turborepoのリモートキャッシュを活用したデプロイ

## 移行戦略

現在のプロジェクトからモノレポ構造への移行手順:

1. Turborepoをセットアップ（`npx create-turbo@latest`）
2. 既存のコードを適切なパッケージ・アプリケーションに分割
3. 共有パッケージの依存関係を設定
4. ビルド・テスト設定を調整
5. CI/CDパイプラインを更新

## まとめ

モノレポ構造を採用することで以下のメリットが得られます:

- コード共有と再利用の促進
- 一貫性のあるツールと設定
- 効率的な依存関係管理
- 複数のアプリを含むプロジェクトのスケーラビリティ向上
- デプロイの簡素化

適切なツールとワークフロー設計により、開発チームの生産性とコード品質を向上させることができます。
