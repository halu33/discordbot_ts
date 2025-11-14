# ディレクトリ構造設計

## src/ の責務
| ディレクトリ | 目的 |
|---------------|------|
| core/ | 起動制御、ログ、例外処理、ルーティング |
| features/ | 機能単位（command / service / repo） |
| storage/   | MySQL 接続と共通DAO（クエリ発行） |
| schedulers/ | 定期実行処理（node-cron） |
| utils/ | 共通関数（時間・整形） |

## 命名規約
- ディレクトリ: 小文字+ハイフン
- ファイル: 同上
- Type/Interface: PascalCase
