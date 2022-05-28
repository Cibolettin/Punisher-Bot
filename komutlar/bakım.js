const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.find(x => x.name== "Üst Düzey Yönetici")) return message.channel.send(`Yeterli izne sahip değilsin.`) //Hangi rolün kullanmasını istiyorsanız o rolün ismini yazın.

    const embed = new Discord.MessageEmbed()
    .setTitle("**Sunucumuz Kısa Süreliğine Bakım Moduna Alınmıştır. Sizlere daha iyi bir hizmet verebilmek için çalışıyoruz...**")
    .setColor("RED")
    	.setImage("https://cdn.discordapp.com/attachments/948799601920589885/977573486191079474/Genis_Harektsiz.jpg")
    .setFooter("Cibo Services ♥️ Punisher RolePlay", message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    return message.channel.send({content: "||@everyone||", embeds : [embed]});

};
exports.conf = {
  aliases: ['bakim']
};

exports.help = {
  name: "bakım"
};
