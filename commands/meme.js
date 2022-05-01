const fetch = require('node-fetch');
const Discord =require("discord.js")
const { memeCommand } = require('../config.js');
const link = ['https://www.reddit.com/r/okbuddyretard/.json?sort=top&t=week']

exports.run = async (bot,message,args) => {
    message.delete()
    let fetchMemes = await fetch(link).then(m=> m.json())
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes [Math.floor(Math.random() * getMemes.length)]
    let memeEmbed = new Discord.MessageEmbed()
    .setTitle(randomMeme.data.title)
    .setFooter("Fresh memes for r/okbuddyretard")
    .setImage(url = `${randomMeme.data.url}`)
    .setColor("#2F3136");

    message.channel.send(memeEmbed)

}

exports.help = {
name: `${memeCommand}`

}