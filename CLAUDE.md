# CLAUDE.md

このファイルはClaude Code (claude.ai/code)がこのリポジトリのコードを操作する際のガイダンスを提供します。

## プロジェクト概要

Spindle-Notesは、URLを含むテーマ別ノートを作成することで情報を研究・整理するためのツールです。ユーザーはAIを使ってノートとチャットし、トピックをより効果的に調査できます。ノートはプロジェクトとして整理され、関係性を分析することができます。

詳細なドキュメントは `docs/` ディレクトリに格納されています。特に重要なファイルは：
- `docs/01_purpose.md` - プロジェクトの目的
- `docs/02_data_modeling.md` - データモデル詳細
- `docs/03_infrastructure.md` - インフラ構成
- `docs/task_list.md` - 実装タスクリスト

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