exports.run = (client, message, args) => {

    var ping;
  
    ping = (Date.now() - message.createdTimestamp)
    let cor = ping > 1000 ? "16711680" : "2490112"
   message.channel.send({
      "embed": {
      "title": `❄ ${message.guild.name} ❄ - Comando em BETA`,
      "color": cor,
      "timestamp": new Date(),
      "footer": {
      "icon_url": message.author.displayAvatarURL,
      'text': message.author.username
    },
    "fields": [
        {
          "name": `• Ping •`,
          "value": `**${ping}**`
        }
    ]
  }
})
}