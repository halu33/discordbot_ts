# ログ設計書

## 出力仕様
- 形式: `logs/YYYY-MM-DD.log`
- 内容: `[ISO8601] [LEVEL] message meta`
- レベル: info / warn / error
- 同時出力: console + file

## ロガー実装
`src/core/logger.ts` に定義。
外部依存なしで `appendFile` に追記。

## 運用

- 開発環境（ArchLinux）では、logs/ を Git 管理対象外にする（.gitignore 済み）。
- 自宅サーバー運用時は、必要に応じて logrotate などで古いログを削除する。
- エラー内容は logs/ に残しつつ、必要に応じて Discord への通知機能を追加してもよい（後日検討）。
