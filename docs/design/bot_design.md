# Discord Bot 設計書

## 目的
- 個人用ユーティリティBot
- メモ、ToDo、セッション記録、定期要約、ステータス表示などを自動化

## 技術構成
| 要素 | 技術 |
|------|------|
| 言語 | TypeScript (Node.js 22+) |
| フレームワーク | discord.js v14 |
| DB | MySQL8.x(mysql2ドライバ想定) |
| スケジューラ | node-cron |
| ログ | 独自logger / logs/YYYY-MM-DD.log |
| 実行環境 | ArchLinux |

## コア構造
- **bot.ts**：エントリポイント（Client起動、イベント分配）
- **register-commands.ts**：Slash登録スクリプト
- **core/**：ルータ・ロガー・例外
- **features/**：機能単位
- **storage/**：DB操作（共通DAO）
- **schedulers/**：定期タスク
- **utils/**：共通関数

## 今後の拡張
- MarkovChain自動発言
- Notion / Google Sheets 連携
