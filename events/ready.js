const client = require("../index");

const activities = [
    'Developing',
    'GitHub: Sloscow',
    'GitHub: Razetro'
];

client.on("ready", () => {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];
        client.user.setActivity(newActivity);
    }, 5000);

    console.log(`Logged in as ${client.user.tag}! v` + process.env.APP_VERSION);
})