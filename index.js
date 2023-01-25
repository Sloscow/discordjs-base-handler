// Version: 1.0
// Author: Sloscow
// Copyright: 2023 (c) Sloscow | All rights reserved.
const { Client, Collection } = require("discord.js");
require('dotenv').config()

const client = new Client({
    intents: 32767,
});
module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();

require("./handler")(client);

client.login(process.env.TOKEN);
