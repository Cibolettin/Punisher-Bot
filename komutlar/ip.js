const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Sunucu IP")
    .setDescription("**mtasa://193.124.8.43:22003**")
    .setColor("BLUE")
    .setFooter("Cibo Services ♥️ Punisher RolePlay", message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    return message.channel.send(embeds : [embed]});

};
exports.conf = {
  aliases: ['sunucu-ip', 's-ip']
};

exports.help = {
  name: "ip"
};
