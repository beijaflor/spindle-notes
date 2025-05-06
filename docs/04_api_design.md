# API設計

## POST 系エンドポイント

- POST /projects → プロジェクト作成
- POST /notes → ノート作成
- POST /resources → リソース登録
- POST /chats → チャット開始

## GET 系エンドポイント

- GET /projects → プロジェクト一覧取得
- GET /notes → ノート一覧取得
- GET /notes/{noteId} → ノート詳細取得（リソースとチャット含む）
- GET /resources/{resourceId} → リソース詳細取得
- GET /chats/{chatId} → チャット履歴取得

## PATCH 系エンドポイント

- PATCH /notes/{noteId} → ノート情報更新
- PATCH /chats/{chatId} → チャット追記