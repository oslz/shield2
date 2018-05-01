
const Discord = require(`discord.js`);
exports.run = (client, message, args, command)  => {
    let member = message.mentions.members.first();
      if (message.author.bot) return message.reply("**Sem permissão =/**")
      if(message.guild.members.get(message.author.id).roles.find("name" , "STAFF")) {
      member.kick();
      const reason = args.slice(1).join(' ');
      if (reason < 1) return message.reply('Esta faltando argumentos');
      member.guild.channels.find("name", "🔥punições").send({"embed": {
          "title": "Punição",
          "description": "",
          "url": "",
          "color": 13632027,
          "timestamp": new Date(),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": "https://cdn.discordapp.com/attachments/437667917228802048/438149080598970368/20180423_222806.jpg"
          },
          "image": {
            "url": ""
          },
          "author": {
            "name": "",
            "url": "",
            "icon_url": ""
          },
          "fields": [
      
            {
              "name": "Usuario punido",
              "value": `${member.user}`
            },
            {
              "name": "Motivo",
              "value": `${reason}`
            },
            {
              "name": "Punição",
              "value": "**KICK**",
              "inline": true
            }
          ]
        }
      })
  }
  }
    
  
  