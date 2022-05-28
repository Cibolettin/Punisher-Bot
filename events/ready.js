const client = require("../index");

client.on("ready",() => {
console.log("Bot Hazır");
var randomMesajlar = ["Punisher RolePlay Yeni Bir Hayat Tarzı","mtasa://193.124.8.43:22003","Cibo Services ♥️ Punisher RolePlay"]
setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);}, 3 * 30000);
client.user.setStatus("dnd");
}) //Cibo ♥️