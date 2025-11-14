# Codex プロンプト集

## 新機能を追加したいとき

以下仕様で /timer コマンドを実装してください。

機能: 指定時間後にリマインドメッセージを送信

構造: src/features/timer/{command.ts,service.ts}

テスト: Jest 形式、service.ts のユニットテストを追加

## テストを書かせたいとき

features/memo/service.ts の add() 関数に対する Jest テストを作成してください。

repoをモックし、例外ケースも含めて。