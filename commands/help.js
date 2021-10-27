const Discord =require("discord.js")
let footer_name = process.env.footer_name;
exports.run = async (client,message,args) => {
    let pagesTitle = [`Commands`, `Credits`]
    let pages = ["```" + `    .SomeSecretCommand - Nahh....
    .meme - displays a meme
    .joke - displays a meme
    .help - You already know what it does`+"```"
    , `Very helpful resources used:
    [Google](https://www.google.com/)
    [Stack Overflow](https://stackoverflow.com/)
    [Discord.js](https://discord.js.org/#/)
    [GEO's World](https://discord.gg/9ffdt32PEF)`]
    let page = 1 
    
    const embed = new Discord.MessageEmbed() 
    .setColor("BLUE") 
    .setFooter(`Page ${page} of ${pages.length} || Made by Swaglord69420#6969`)
    .setDescription(pages[page-1])
    embed.setTitle(pagesTitle[page-1])
    
    message.channel.send({embed}).then(msg => {
      msg.react('⬅').then( r => {
        msg.react('➡')
    
        
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id
    
        const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000})
        const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000})
    
        backwards.on('collect', (r, u) => {
            if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
            page--
            embed.setTitle(pagesTitle[page-1])
            embed.setDescription(pages[page-1])
            embed.setFooter(`Page ${page} of ${pages.length} || Made by Swaglord69420#6969`)
            msg.edit(embed)
            r.users.remove(r.users.cache.filter(u => u === message.author).first())
        })
    
        forwards.on('collect', (r, u) => {
            if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
            page++
            embed.setTitle(pagesTitle[page-1])
            embed.setDescription(pages[page-1])
            embed.setFooter(`Page ${page} of ${pages.length} || Made by Swaglord69420#6969`)
            msg.edit(embed)
            r.users.remove(r.users.cache.filter(u => u === message.author).first())
        })
      })
    })
       



    

    

}   

exports.help = {
    name: 'help'

}