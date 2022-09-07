const { Client, LocalAuth } = require("whatsapp-web.js");
const qrCode = require("qrcode-terminal");

const client = new Client({
    authStrategy: new LocalAuth(),
});
client.setMaxListeners(20);

client.on("qr", (qr) => {
    qrCode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready");
});

client.on("message", async (message) => {
    console.log(message.body);
});

client.on("message", async (message) => {
    if (message.body === "Yo" || message.body === "How far?") {
        console.log((await message.getContact()).name);
        message.reply("What's good bro?");
    }
});

client.on("message", async (message) => {
    if (
        message.body.includes("Good") &&
        ((await message.getContact()).name === "Momsi❤" ||
            (await message.getContact()).name === "Pops💪")
    ) {
        console.log((await message.getContact()).name);
        message.reply(
            "Good day sir/ma, I'll get back to you as soon as possible."
        );
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Bro" &&
        message.body === "Lets test the bot"
    ) {
        message.reply(
            "Bot is working baby!!! \n This reply is from a bot lol."
        );
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Kemps❤" &&
        message.body === "Hey boo"
    ) {
        message.reply("How far Kemps? \n This reply is from a bot lol.");
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Jay ❤" &&
        message.body === "Hey boo"
    ) {
        message.reply("Jay!! What's good? \n This reply is from a bot lol.");
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Damilola" &&
        message.body === "Hi"
    ) {
        message.reply("How are you?");
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Damilola" &&
        (message.body === "I'm good \n You?" ||
            message.body === "I'm good \n You")
    ) {
        message.reply("I'm fine.");
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Momsi❤" &&
        message.body === "Good morning son"
    ) {
        message.reply(
            "Good morning mummy \n This reply is from a bot, I'll reply you soon"
        );
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Pops💪" &&
        message.body === "Good morning son"
    ) {
        message.reply(
            "Good morning sir \n This reply is from a bot, I'll reply you soon"
        );
    }
});

client.on("message", async (message) => {
    if (
        (await message.getContact()).name === "Bomes 💞" &&
        message.body === "Little brother"
    ) {
        message.reply(
            "What's good Bomes? \n This reply is from a bot, I'll reply you soon"
        );
    }
});

client.initialize();

module.exports = client;
