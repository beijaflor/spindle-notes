# CLAUDE.md

このファイルはClaude Code (claude.ai/code)がこのリポジトリのコードを操作する際のガイダンスを提供します。

## プロジェクト概要

Spindle-Notesは、URLを含むテーマ別ノートを作成することで情報を研究・整理するためのツールです。ユーザーはAIを使ってノートとチャットし、トピックをより効果的に調査できます。ノートはプロジェクトとして整理され、関係性を分析することができます。

## 技術スタック

- **フロントエンド**: TailwindCSSを使用したTanStack Start
- **バックエンド**: Vercel Functions上で動作するHono APIフレームワーク
- **データベース**: Supabase Postgres
- **ストレージ**: Supabase Storage
- **認証**: Supabase Auth (Magic Link)
- **認可**: Supabase Row Level Security (RLS)
- **APIクライアント**: Claude統合のためのAnthropic SDKを使用

## 開発コマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの実行（実装後）
pnpm dev

# TypeScriptエラーのチェック（実装後）
pnpm typecheck

# コードのリント（実装後）
pnpm lint

# コードのフォーマット（実装後）
pnpm format
```

## データモデル

### 主要モデル

- **Project**: 関連するノートのコンテナ
- **Note**: 特定のトピックに関するリソースのコレクション
- **Resource**: メタデータを持つURLへの参照
- **ResourceMetadata**: タイトル、説明、コンテンツスナップショットを含むURLメタデータ
- **Chat**: ノートの内容に関するAIとの会話履歴

## API設計

APIは以下の主要エンドポイントを持つRESTful原則に従います：

- **Projects**: プロジェクトのCRUD操作
- **Notes**: ノートのCRUD操作
- **Resources**: リソースの作成と取得
- **Chats**: チャットセッションの作成と更新

## 認証フロー

Supabase Magic Link認証を使用:
1. ユーザーがメールアドレスを入力
2. マジックリンクがメールに送信される
3. ユーザーがリンクをクリックすると自動的に認証される
4. セッション管理はSupabase SDKによって処理される

## 開発ガイドライン

- **コミット**: Conventional Commitsフォーマットに従う
- **コードスタイル**: 一貫したフォーマットのためのESLintとPrettier
- **TypeScript**: 型安全性のための厳格モードを有効
- **Gitフック**: コミット前検証のためのHuskyとlint-staged