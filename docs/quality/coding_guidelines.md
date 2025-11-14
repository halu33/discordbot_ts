# コーディング規約

## TypeScript
- strict モード
- import/export はESM準拠
- 関数引数・戻り値の型を明示
- 暗黙any禁止
- コメントは行コメント重視（処理意図を書く）

## 命名規則
| 要素 | 規則 |
|------|------|
| 変数 | camelCase |
| クラス/型 | PascalCase |
| 定数 | UPPER_SNAKE_CASE |

## ファイル構成
- 1ファイル1責務
- service.ts にビジネスロジック集中
- command.ts は入出力整形のみ
