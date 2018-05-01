const gifSearch = require("gif-search");

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');


    if(!razaou.length < 1) {

        gifSearch.random(message.content.replace("!gif", "")).then(
            
            gifUrl => message.channel.send({
                "embed": {
                    "title": `💫 ${message.guild.name} 💫`,
                    "color": 2490112,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                    },
                    "image": {
                        "url": gifUrl
                    }
                }
            })
        );

    } else {
        message.reply("**Expecifique qual GIF**");
    }


}