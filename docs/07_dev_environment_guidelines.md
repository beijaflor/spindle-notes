# 開発環境設定指針

## 使用ツール一覧

- **Lint**: ESLint
- **Format**: Prettier
- **型チェック**: TypeScript
- **コミットメッセージ規約**: シンプルな一行メッセージ
- **コミット補助ツール**: Commitizen + cz-customizable
- **Git Hook 管理**: Husky + lint-staged
- **デッドコードチェック**: knip

### 🔍 Lint (ESLint)

- ベース設定: `eslint:recommended`
- 使用プラグイン:
  - `@typescript-eslint`
  - `eslint-plugin-react`（React 使用時）
  - `eslint-plugin-import`
  - `eslint-plugin-unused-imports`
- エラーとして扱うべきルール:
  - 未使用変数禁止
  - 暗黙の any 禁止
  - インポート順序統一

### 🎨 Format (Prettier)

- シングルクォート使用
- セミコロン必須
- 行幅 100 文字
- タブ幅 2
- JSX では必ずカンマを維持

### 📜 型チェック (TypeScript)

- `strict: true`
- `noImplicitAny: true`
- `skipLibCheck: true`
- `moduleResolution: node`

## 📦 コミット規約

このプロジェクトでは、シンプルで一行のコミットメッセージを推奨しています。

### 基本原則

1. **小さなコミット**: 一つのコミットは一つの変更に集中する
2. **明確なメッセージ**: 何をしたかではなく、なぜ変更したかを説明する
3. **簡潔さ**: 一行に収まるメッセージを心がける（最大150文字）

### 良いコミットメッセージの例

```
ユーザー登録フォームのバリデーション追加
API接続タイムアウト時のエラーハンドリングを改善
ダークモード切り替え機能の実装
パフォーマンス向上のためにリストコンポーネントをメモ化
```

### コミット作成方法

```bash
# 通常のコミット
git add <ファイル名>
git commit -m "コミットメッセージ"

# または対話式コミット
git add <ファイル名>
pnpm commit
```

## 🤖 Git Hooks (Husky + lint-staged)

- **pre-commit**: Lint & Format チェック
- **commit-msg**: コミットメッセージの Conventional チェック

```json
"lint-staged": {
  "src/**/*.{ts,tsx,js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

## ⚡ 開発初期セットアップ例

```bash
pnpm install -D eslint prettier typescript husky lint-staged commitizen cz-customizable @commitlint/cli @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-import eslint-plugin-unused-imports

npx husky install
npx husky add .husky/pre-commit "pnpm lint-staged"
npx husky add .husky/commit-msg "npx commitlint --edit $1"
```

これを基準に、プロジェクトのセットアップをスタートします。
