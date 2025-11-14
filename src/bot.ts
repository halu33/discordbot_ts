import "dotenv/config";
import {
    Client,
    GatewayIntentBits,
    ActivityType
} from "discord.js";

// トークンチェック
const token: string | undefined = process.env.DISCORD_TOKEN;
if (!token) {
    console.error("ERROR: DISCORD_TOKENが.envに設定されていません");
    process.exit(1);
}

// Client準備
const client: Client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

// イベントハンドラ
client.once("ready", (c) => {
    console.log(`Logged in as ${c.user.tag}`);

    // プレゼンス、ステータス表示の設定
    client.user?.setPresence({
        activities: [{name: "halu33", type: ActivityType.Playing}],
        status: "online",
    });
});

// 例外ハンドリング
process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
});
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

// ログイン実行
client.login(token).catch((err: unknown) => {
    console.error("Login failed:", err);
    process.exit(1);
});

