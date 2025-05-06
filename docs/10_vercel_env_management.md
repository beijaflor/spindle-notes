# Vercel での環境変数管理

## Vercel 上での環境変数設定

- Vercel 管理画面 > Settings > Environment Variables から設定
- Development / Preview / Production で別々に値を指定

## ローカル開発との連携

### 環境変数ファイルの作成

```bash
# .env.local
DATABASE_URL=postgresql://user:password@host:port/dbname
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

- `.gitignore` で除外
- `NEXT_PUBLIC_` の付いた値はブラウザ側からも見えるので要注意

### dotenvx の利用

- `.env` 管理を高級化
- 環境分分切り (`.env.production`, `.env.preview` 等)
- ローカル開発時:

```bash
dotenvx run dev
```

## Vercel CLI と dotenvx の連携（自動同期）

### Vercel CLI の使用方法

```bash
npm install -g vercel

# ログイン
vercel login

# 環境変数設定
vercel env add NAME development
vercel env add NAME preview
vercel env add NAME production
```

### dotenvx との連携（オプション）

現在の dotenvx では、Vercel のような外部プラットフォームに直接移行する機能は残念ながら付いていません（今後実装予定はあり）。

**そのため：**

- dotenvx はローカルの環境切り替えツールとして使い
- Vercel には CLI から手動で env を設定

## まとめ

| 項目                   | 方法                          |
| :--------------------- | :---------------------------- |
| Secrets の本番設定     | Vercel GUI か CLI で設定      |
| ローカル開発の環境変数 | `.env.local` + dotenvx で管理 |
| Vercel との同期        | CLI を使ってマニュアルで統一  |

---

> 注： dotenvx はローカル上での環境分切とストア方法のラッピングを目的にしているため，Vercel 側との自動連携は目予ではされていません！

---

次は、必要なら Vercel + dotenvx を利用した **開発環境構築テンプレート** も提案出来ます！
