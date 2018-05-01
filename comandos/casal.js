
const Discord = require(`discord.js`);
const client = new Discord.Client();
const Canvas = require('canvas-prebuilt');
const pixelUtil = require('pixel-util');
const urlCoracao = 'https://cdn.discordapp.com/attachments/433776595187269633/436281835186683904/a1cd2e4a82bf9407d751f02f81baf257.png';

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

        exports.run = (client, message, args) => {
            let canvas   = new Canvas(384, 128),
                ctx      = canvas.getContext('2d'),
                mentions = message.mentions.users.first(2);
                
            pixelUtil.createBuffer(mentions[0].avatarURL).then(buffer1 => {
                let img1 = new Canvas.Image;
                img1.src = buffer1;
                ctx.drawImage(img1, 0, 0, 128, 128);
                pixelUtil.createBuffer(urlCoracao).then(buffer2 =>  {
                    let img2 = new Canvas.Image;
                    img2.src = buffer2;
                    ctx.drawImage(img2, 128, 0, 128, 128);
                    pixelUtil.createBuffer(mentions[1].avatarURL).then(buffer3 => {
                        let img3 = new Canvas.Image;
                        img3.src = buffer3;
                        ctx.drawImage(img3, 256, 0, 128, 128);
                        let file  = new Discord.Attachment(canvas.toBuffer(), 'shipp.png'),
                            embed = new Discord.RichEmbed()
                                .setTitle(`**Será que temos um casal aqui**?`)
                                .setColor(2490112)
                                .setTimestamp(new Date())
                                .attachFile(file)
                                .setImage('attachment://shipp.png')
                                .addField('Casal escolhido foi', `${mentions[0]} ${mentions[1]}`, true)
                                .addField('Chances atuais do relacionamento', `${falas[Math.round(Math.random() * falas.length - 1)]}`, true);
                            
                        message.channel.send({embed});
                    });
                });
            });
        }
        