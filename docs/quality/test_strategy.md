# テスト設計方針

## 概要
- フレームワーク: Jest + ts-jest (ESM)
- 対象: 主に service.ts のロジック層
- 実データベースやDiscord APIは使用しない

## テスト層
| 種別 | 対象 | 内容 |
|------|------|------|
| unit | service | 純粋ロジック、モックrepo |
| integration | command | 入出力の整合性 |
| e2e (任意) | Discord実機 | Guildテスト環境で実行 |

## モック
- repo: モックオブジェクトをjest.fnで定義
- Discord: 必要ならmock-clientライブラリ検討
