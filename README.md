# 💾 DiscordJS-base-handler

<div align="center">
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
</div>

![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/npm-v.18.13.0-informational?style=flat&logo=npm&logoColor=white&color=6aa6f8)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=sloscow.discordjs-base-handler)

# 💾 DiscordJS-base-handler
DiscordJS-base-handler is a functional, beginner friendly Discord Modular Bot written in JavaScript. This DiscordJS base handler contains **ONLY** slash commands.

# Getting Started
### Requirements
* [**Node.js 18.13.0+**](https://nodejs.org/en/)

#### Example Slash Commands
```js
const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "slashcommand name",
    description: "Type here your description",
    type: 'CHAT_INPUT',

    run: async (client, interaction, args) => {
    },
};
```

# 📑 Features
- [ ] Modular system
- [ ] Slash Commands
- [ ] Database Support

# 🙏 Thanks to:
### 🧑🏻‍🤝‍🧑🏻 Contributors
* Sloscow
* Razetro
### 🚧 Used Open-Source projects
* [discordjs/discord.js](https://github.com/discordjs/discord.js)
* [npmjs/dotenv](https://www.npmjs.com/package/dotenv)
* [npmjs/glob](https://www.npmjs.com/package/glob)
