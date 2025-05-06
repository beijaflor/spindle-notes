# 開発環境設定指針

## 使用ツール一覧

- **Lint**: ESLint
- **Format**: Prettier
- **型チェック**: TypeScript
- **コミットメッセージ規約**: Conventional Commits
- **コミット補助ツール**: Commitizen + cz-conventional-changelog
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

## 📦 Commit 規約 (Conventional Commits)

### フォーマット

```
<type>(<scope>): <subject>

<body>

<footer>
```

### よく使う type 一覧

- `feat`: 新機能追加
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: フォーマット修正のみ（コードロジックに影響なし）
- `refactor`: リファクタリング（機能追加・バグ修正なし）
- `chore`: ビルドプロセスやツールの変更

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
pnpm install -D eslint prettier typescript husky lint-staged commitizen cz-conventional-changelog @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-import eslint-plugin-unused-imports

npx husky install
npx husky add .husky/pre-commit "pnpm lint-staged"
npx husky add .husky/commit-msg "npx commitlint --edit $1"
```

これを基準に、プロジェクトのセットアップをスタートします。
