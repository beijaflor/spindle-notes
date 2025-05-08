import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => {
  return c.json({
    message: 'Hello from Spindle Notes API!',
  });
});

// 開発環境ではサーバーを直接起動
if (process.env.NODE_ENV !== 'production') {
  // ESMで動作するサーバーのインポート方法（コンパイル時問題が発生する場合は調整が必要）
  import('@hono/node-server').then(({ serve }) => {
    console.log('Server is running on http://localhost:3001');
    serve(app, info => {
      console.log(`Server is running on port ${info.port}`);
    });
  });
}

// Vercel用のエクスポート - Honoアプリがそのまま互換性あり
export default app;
