
const Discord = require(`discord.js`);
exports.run = (client, message, args)  => {
    let reason = args.slice(0).join(' ');
      if (message.author.bot) return message.reply("**Sem permissão =/**");
      if(message.guild.members.get(message.author.id).roles.find("name" , "STAFF")) {
      if (reason.length < 1) return message.reply('**<valor>**');
      message.channel.bulkDelete(`${args[0]}`)

            message.channel.send(`** <@${message.author.id}> limpou o historico!**`);
            }
        
}