import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spindle Notes',
  description: 'URLを含むテーマ別ノートを作成し、チャット形式でリサーチを行うためのツール',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
