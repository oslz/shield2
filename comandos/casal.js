
const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    var falas = [
        "10% [█.........]", 
        "20% [██........]", 
        "30% [███.......]", 
        "40% [████......]", 
        "50% [█████.....]", 
        "60% [██████....]", 
        "90% [█████████.]", 
        "80% [████████..]", 
        "70% [███████...]", 
        "100%[██████████]"
    ];
    mentions = message.mentions.users.first(2);
    if (mentions < 2) return message.reply("**Mencione as duas pessoas**");
    embed = new Discord.RichEmbed()
        .setTitle(`💫 ${message.guild.name} 💫`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField('Casal escolhido foi', `${mentions[0]} ${mentions[1]}`)
        .addField('Chances atuais', `${falas[Math.floor(Math.random() * falas.length - 1)]}`, true)
        message.channel.send(embed).then(msg => {msg.delete(15000)});
}