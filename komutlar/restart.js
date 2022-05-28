const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.find(x => x.name== "Üst Düzey Yönetici")) return message.channel.send(`Yeterli izne sahip değilsin.`) //Hangi rolün kullanmasını istiyorsanız o rolün ismini yazın.

    const embed = new Discord.MessageEmbed()
    .setTitle("**Sunucumuza restart atılıyor en kısa zamanda tekrardan aktif olacaktır.**")
    .setColor("ffa500")
    	.setImage("https://cdn.discordapp.com/attachments/948799601920589885/977573486191079474/Genis_Harektsiz.jpg")
    .setFooter("Cibo Services ♥️ Punisher RolePlay")
    .setTimestamp()
    return message.channel.send({content: "||@everyone||", embeds : [embed]});

};
exports.conf = {
  aliases: ['res', 'rest']
};

exports.help = {
  name: "restart"
};
