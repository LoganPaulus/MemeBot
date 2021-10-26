const Discord = require("discord.js");

exports.run = async (client,message,args) => {
    const permEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} you do not have permission to execute this command!`)
    .setFooter("© 2021 Howgay Bot")
    .setColor('#2e42c4')
    .setTimestamp()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(permEmbed)
    message.delete()
    const oof = client.guilds.cache.size
    message.channel.send(oof).then(message => message.delete({timeout: 10000}));


 

    

    

}   

exports.help = {
    name: 'mike'
}