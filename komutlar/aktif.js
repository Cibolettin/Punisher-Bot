const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.find(x => x.name== "Üst Düzey Yönetici")) return message.channel.send(`Yeterli izne sahip değilsin.`) //Hangi rolün kullanmasını istiyorsanız o rolün ismini yazın.

    const embed = new Discord.MessageEmbed()
    .setTitle("**Sunucumuz sorunsuz bir şekilde aktif edilmiştir. Aktif olan herkesi sunucumuza bekliyoruz. \nSunucumuzun IP Adresi: '217.195.207.167'**")
    .setColor("GREEN")
    	.setImage("https://cdn.discordapp.com/attachments/874868999995916330/947444493618143252/aktif.gif")
    .setFooter("Cibo Services ♥️ Punisher RolePlay", message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    return message.channel.send({content: "||@everyone||", embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "aktif"
};
