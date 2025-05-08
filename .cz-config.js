module.exports = {
  // 一行のシンプルなコミットメッセージのみ
  messages: {
    type: '変更タイプを選択してください（通常はデフォルトでOK）:',
    subject: 'コミット内容を一行で簡潔に記述してください（最大150文字）:',
  },
  
  // 他の質問をスキップ
  skipQuestions: [
    'scope',
    'body',
    'breaking',
    'footer',
    'issues',
  ],
  
  // デフォルトタイプに加えて基本的なタイプも提供
  types: [
    { value: '', name: 'デフォルト: タイプなし（推奨）' },
    { value: 'feat', name: '機能追加: 新機能' },
    { value: 'fix', name: 'バグ修正: 問題の修正' },
    { value: 'docs', name: 'ドキュメント: ドキュメントのみの変更' },
    { value: 'style', name: 'スタイル: コード動作に影響しない変更（空白、フォーマット等）' },
    { value: 'refactor', name: 'リファクタリング: バグ修正でも機能追加でもないコード変更' },
    { value: 'chore', name: 'その他: ビルドプロセスやツールの変更など' },
  ],
  
  // タイプ選択を必須にする
  skipType: false,
  
  // 最終的なコミットメッセージのフォーマット
  // タイプが空の場合はsubjectのみ、それ以外はtype: subjectの形式
  format: (answers) => {
    const { type, subject } = answers;
    if (type === '') {
      return subject;
    }
    return `${type}: ${subject}`;
  },
  
  // コミットメッセージの最大文字数
  maxHeaderWidth: 150,
};