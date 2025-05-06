# バックエンド技術スタック

## 基本構成

- デプロイ先: Vercel Functions
- 開発言語: TypeScript
- フレームワーク: Hono (API ルーティング)

| 項目                         | 内容                                   | 推奨ライブラリ・技術                                                                  | コメント                                     |
| :--------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------ | :------------------------------------------- |
| HTTP ルーティング            | API ルーティングを簡潔に、型安全で行う | [Hono](https://hono.dev/)                                                             | 高速・軽量、Vercel と相性良好                |
| バリデーション               | API リクエストの型検証                 | [ArkType](https://arktype.io/)                                                        | フロントと統一できる                         |
| 認証                         | Supabase Auth の連携                   | Supabase 公式 SDK (`@supabase/supabase-js`)                                           | OIDC 連携も可能                              |
| データベースアクセス         | Supabase 操作                          | Supabase 公式クライアント                                                             | Prisma 不要                                  |
| 環境変数管理                 | 安全な.env 管理                        | [dotenvx](https://dotenvx.sh/) + Vercel 標準                                          | ローカルは dotenvx、本番は Vercel の UI 管理 |
| ログ管理・エラートラッキング | 最小限のログ記録                       | Vercel 標準ログ、必要に応じて Sentry                                                  | MVP は標準ログで十分                         |
| テスト                       | API 単位でのテスト                     | [vitest](https://vitest.dev/) + [supertest](https://github.com/visionmedia/supertest) | E2E テストにも耐える構成                     |
| リクエストスキーマ自動生成   | OpenAPI などからスキーマ生成           | Hono の拡張 (`hono-openapi`)                                                          | 優先度は低めで後回しも OK                    |

## 注意

- **ローカル開発**は dotenvx 使用
- **本番(Vercel)**はローカルの.env なしで OK（Vercel UI 管理）
- dotenvx の利用時は `dotenvx run --` で開発コマンドを実行
