const { Client, IntentsBitField} = require('discord.js');

//initialize
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,           //Server
        IntentsBitField.Flags.GuildMembers,     //Users
        IntentsBitField.Flags.GuildMessages,    //Message Info
        IntentsBitField.Flags.MessageContent,   //Message Content
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
})

client.on('messageCreate', (message) => {
    console.log(message);
})

//Login Token
//RESET AFTER EVERY SESSION!!!!!
client.login("MTEzNjUxMDc3OTE5NDA4MTMwMA.GxYifv.PsdSNqbaJxg3078jEtLrUO9rI9gcSyQIpmjgmw");