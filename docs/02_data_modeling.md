# データモデリング

## Project

- id: string
- name: string
- description: string

## Note

- id: string
- project_id: string
- title: string
- description: string

## Resource

- id: string
- note_id: string
- url: string
- metadata_id: string

## ResourceMetadata

- id: string
- url: string
- title: string
- description: string
- favicon_url: string
- og_image_url: string
- content_snapshot_path: string (HTML やスクリーンショットなどへのパス)
- fetched_at: datetime

## Chat

- id: string
- note_id: string
- messages: array
