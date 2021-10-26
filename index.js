const Discord =require("discord.js")
const bot = new Discord.Client({ws: { properties: {
    $browser: "Discord Android"
}}});
const fs = require("fs");

const activites = ["a", "b", "c", "d"]
const actaewa = activites[Math.floor(Math.random() * activites.length, 2000)];
const oof = bot.guilds.cache.size
const token = "OTAyNTg2NDc2ODI1NTY3MjYy.YXglKQ.NLIVAvJezHowMHODJnafacDmE_s"
const types = ["WATCHING", "PLAYING", "LISTENING"]
const TYPESSAA = types[Math.floor(Math.random() * types.length, 2000)];

bot.commands = new Discord.Collection();
 // mongodb+srv://SASRP:<password>@sasrp.mlga5.mongodb.net/Data


bot.on('ready', () => {
    console.log('meme bot is now online')
    let i = 0;

    
    setInterval(()=> {
        const index = Math.floor(i);
        
            
        bot.user.setActivity(`Jokes`, { type: 'WATCHING' });
         
        bot.user.setActivity('with ur balls', { type: 'PLAYING' });
         
        

    
   

    i = i + 1;
    if(i === bot.user.setActivity.length) i = i - bot.user.setActivity.length - bot.user.setActivity.length;
    
},5000)
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
    let prefix = '.';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot, message, args)}

    
})

bot.login("OTAyNTg2NDc2ODI1NTY3MjYy.YXglKQ.NLIVAvJezHowMHODJnafacDmE_s")