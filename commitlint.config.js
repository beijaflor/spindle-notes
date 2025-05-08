module.exports = {
  // Conventional Commitsを拡張せず、シンプルなルールのみを適用
  rules: {
    // ヘッダー（1行目）の最大長を緩和（デフォルトは100文字）
    'header-max-length': [2, 'always', 150],
    
    // タイプとスコープに関するルールを無効化
    'type-enum': [0],
    'type-case': [0],
    'type-empty': [0],
    'scope-enum': [0],
    'scope-case': [0],
    'scope-empty': [0],
    'subject-case': [0],
    
    // 本文や脚注に関するルールも無効化
    'body-leading-blank': [0],
    'body-max-line-length': [0],
    'footer-leading-blank': [0],
    'footer-max-line-length': [0],
    
    // 唯一必須なのはコミットメッセージが空でないこと
    'subject-empty': [2, 'never']
  }
};