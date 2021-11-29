const Discord = require('discord.js');
const client = new Discord.Client({ 
    allowedMentions: {  
        parse: ['users', 'roles'],
        repliedUser: true
    },
    intents: [  
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS"

    
    ],
});

client.on("ready", () => {  
    console.log("I am ready to go")
})

client.on("message", async message =>   {   
    if(message.content === "!goon") {
        message.channel.send("Yea the goons")
    }
})

client.on("message", async message =>   {   
    if(message.content === "!kripp") {
        message.channel.send("HEYGUYSHOWSITGOINGKRIPPARRIANHERE")
    }
})

client.on("message", async message =>   {   
    if(message.content === "!Hey Ned") {
        message.channel.send("Howdily-doodily, neighborino")
    }
})

client.on("message", async message =>   {   
    if(message.content === "!monkeymode") {
        message.channel.send("ooo ooo ahhh ahhh")
    }
})

client.on("message", async message =>   {   
    if(message.content === "!do a") {
        message.channel.send("!huge")
    }
})


client.on("message", async message =>   {   
    if(message.content === "!huge") {
        message.channel.send("<:cone:913911268522491934>")
    }
})


client.login("OTEyOTQ3MTg3MDkxMTIwMTQ4.YZ3WUw.4vftUhmnLemh3zxzr_lVtIqqR_M")