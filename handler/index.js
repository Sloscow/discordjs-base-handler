const { glob } = require("glob");
const { promisify } = require("util");

const globPromise = promisify(glob);

module.exports = async (client) => {
    // ———————————————[Events]———————————————
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // ———————————————[Slash Commands]———————————————
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });

    // Ready Bot
    client.on("ready", async () => {
        await client.guilds.cache
            .get(process.env.APP_GUILDID)
            .commands.set(arrayOfSlashCommands);

        // Register for all the guilds the bot is in
        // await client.application.commands.set(arrayOfSlashCommands);
    });

};