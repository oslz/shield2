exports.run = (client, message, args) => {
message.channel.send({
    "embed": {
        "title": `💫 ${message.guild.name} 💫`,
        "color": 2490112,
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
        },
        "fields": [
            {
              "name": `• IP •`,
              "value": `**EM BREVE**`
            }
        ]
      }
    })
}