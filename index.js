const Discord =require("discord.js")
const bot = new Discord.Client({ws: { properties: {
    $browser: "Discord Android"
}}});
const fs = require("fs");
bot.commands = new Discord.Collection();
const { token, prefix } = require('./config.js');
const { botStatus } = require('./config.js');
const { botStatusMessage } = require('./config.js');
const { botPrefix } = require('./config.js');
bot.on('ready', () => {
    console.log('meme bot is now online')
    let i = 0;
    setInterval(()=> {
      
        bot.user.setActivity(`${botStatusMessage}`, { type: `${botStatus}`});
    if(i === bot.user.setActivity.length) i = i - bot.user.setActivity.length - bot.user.setActivity.length;
    
})
    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');

        if(jsfile.lenght <=0) return console.log("Could not find any commands!")

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        }) 
    })
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = `${botPrefix}`;
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot, message, args)}

    
})

bot.login(`${token}`)