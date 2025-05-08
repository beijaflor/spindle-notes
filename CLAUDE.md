# CLAUDE.md

このファイルはClaude Code (claude.ai/code)がこのリポジトリのコードを操作する際のガイダンスを提供します。

## プロジェクト概要

Spindle-Notesは、URLを含むテーマ別ノートを作成することで情報を研究・整理するためのツールです。ユーザーはAIを使ってノートとチャットし、トピックをより効果的に調査できます。ノートはプロジェクトとして整理され、関係性を分析することができます。

詳細なドキュメントは `docs/` ディレクトリに格納されています。特に重要なファイルは：
- `docs/01_purpose.md` - プロジェクトの目的
- `docs/02_data_modeling.md` - データモデル詳細
- `docs/03_infrastructure.md` - インフラ構成
- `docs/13_monorepo_structure.md` - モノレポ構造と設定
- `docs/task_list.md` - 実装タスクリスト

## 開発ルール

### パッケージ管理

- **重要**: すべてのパッケージは必ずローカル（-w オプション付き）にインストールしてください
- グローバルインストール (`npm install -g`, `pnpm add -g` など) は厳禁です
- 例: `pnpm add -w [パッケージ名]`

### コミット規約

このプロジェクトではシンプルな一行コミットメッセージを採用しています。`pnpm commit` コマンドを使用して、ガイド付きのコミットプロセスを実行してください。

## モノレポ設定

このプロジェクトはTurborepoを使用したモノレポ構造になっています。最新のTurborepo（v2以降）では、以前の`pipeline`の代わりに`tasks`を使用します：

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {  // 注意: v2以降では "pipeline" ではなく "tasks"
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    }
  }
}
```

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
