# 認証と認可

## 認証（Authentication）

- 最低限、誰が作ったノートなのかを区別する必要あり
- 誰でもすぐに使えるようにしたいので、登録のハードルは下げたい（例：メールリンク認証）
- 将来的に、複数端末から同じアカウントにアクセスできるとよい

## 認可（Authorization）

- 自分が作ったノートやリソースだけを操作できるべき
- 他人のデータを見たり編集したりできないようにする
- 将来的に共有機能を追加できるように備える

## Supabase で採用する方式

| 項目 | 方式                     | 特徴                                              | 備考                         |
| :--- | :----------------------- | :------------------------------------------------ | :--------------------------- |
| 認証 | Email Link (Magic Link)  | メールでログインリンクを送信、パスワード不要      | 登録簡単、セキュリティも確保 |
| 認可 | RLS (Row Level Security) | Supabase 標準、ユーザー ID ごとに DB アクセス制限 | 必須。デフォルト ON          |

## 決定事項

- 認証方式: **Magic Link (メールリンク認証)** を採用
- 認可方式: **RLS (Row Level Security)** を必ず設定

## 認証フロー設計（Magic Link 方式）

### 1. 未ログイン状態（ゲスト）

- ユーザーはトップページにアクセス
- ログインしていない場合は「ログイン/新規登録」ボタンが表示される
- Magic Link 用のメールアドレス入力フォームを表示
- メールアドレスを入力 → Supabase Auth 経由で Magic Link を送信

### 2. Magic Link クリック後

- ユーザーはメールを受信し、リンクをクリック
- 自動でアプリにリダイレクト（ログインセッションが開始）
- トークンは Supabase SDK が自動的に処理
- ログイン完了後、ユーザー専用のダッシュボード or ノート一覧画面に遷移

### 3. ログイン状態

- セッションを監視して、ユーザーがログインしているかを判定
- ログインしている場合、常にユーザーのノート一覧などにアクセス可能
- セッション切れの場合、自動ログアウトして再ログインを促す

## 参考資料

🔗 Supabase Auth（公式ドキュメント）
https://supabase.com/docs/guides/auth

🔗 Magic Link 認証に関するガイド
https://supabase.com/docs/guides/auth/auth-magic-link

🔗 公式ドキュメント参考リンク

- https://supabase.com/docs/reference/javascript/auth-signinwithotp
- https://supabase.com/docs/reference/javascript/auth-onauthstatechange
