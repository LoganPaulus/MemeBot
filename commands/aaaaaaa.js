const Discord = require("discord.js");

exports.run = async (client,message,args) => {
    const permEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} you do not have permission to execute this command!`)
    .setFooter("© 2021 Go fuck yourself")
    .setColor('#2F3136')
    .setTimestamp()
    

    message.channel.send(permEmbed)


 

    

    

}   

exports.help = {
    name: 'SomeSecretCommand'
}