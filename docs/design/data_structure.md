# データ構造設計書

## SQLite テーブル

### memos
| カラム      | 型                  | 説明        |
|-------------|---------------------|-------------|
| id          | BIGINT UNSIGNED PK  | メモID      |
| user_id     | VARCHAR(32)         | 投稿者ID    |
| content     | TEXT                | 本文        |
| created_at  | DATETIME(3)        | 作成日時    |
 |

（以下 todos, logs, sessions など）

## ログファイル
- 形式: `YYYY-MM-DD.log`
- 1行: `ISO8601 [LEVEL] message meta(json)`
