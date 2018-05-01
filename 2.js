const Discord = require(`discord.js`);
const client = new Discord.Client();
const prefix = ("!");
const prefixa = "s!";
console.log('.')

client.login("NDM3NjY5OTY1NzUyMTcyNTU0.DcAaFQ.21CIBxXGEAo0Dq6UAXZ4XxRLf84");
client.on("ready", () => {
    client.user.setPresence({ game: { name: 'a rede ShieldGames', type: 1, url: 'https://www.twitch.tv/sougay'} });

                
        }) // INTRODUCAO = SETAR CARGO E MSG DE BOAS VINDAS
        client.on("guildMemberAdd", function(member) {
            member.guild.channels.find("name", "🚪entrada").send({embed: {
                    "title": "» " + '**' + member.displayName + '**',
                    "description": "",
                    "url": "",
                    "color": 13632027,  
                    timestamp: new Date(),
                    "footer": {
                        "icon_url": "",
                        "text": ""
                    },
                    "thumbnail": {
                        "url": ""
                    },
                    "image": {
                        "url": ""
                    },
                    "author": {
                        "name": "",
                        "url": "",
                        "icon_url": ""
                                      },
                    "fields": [{
                            "name": "Entrada",
                            "value": "| Bem-vindo ao discord do **Shield** qualquer coisa pode chamar!",
                            "inline": true
                        },
                        {
                            "name": "Quantidade atual de users",
                            "value": `| Discord do **SHIELD**: ${client.users.size -1} |`,
                            "inline": true
                        
                        }
                    
                    ]
            }
            })
            member.guild.members.get(member.id).addRole(member.guild.roles.find("name", "🚀 Jogadores").id);
            console.log(`O contator subiu! agora temos ${client.users.size -1} users no discord.`)
}) // COMANDOS - GERAIS
   
client.on("message", message =>{
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
message.delete();
if (message.channel.id == client.guilds.get("427238449028792322").channels.get("440706248162410496").id) {
try {
let commandFile = require(`./comandos/${command}.js`);
commandFile.run(client, message, args);

} catch (err) {
    console.error("[CONSOLE] " + err);
}
}
})
 // COMANDOS - GERAIS ADM 
   
client.on("message", message =>{
if (message.author.bot) return;
if (!message.content.startsWith(prefixa)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefixa.length);
let args = message.content.split(" ").slice(1);
message.delete();
embed = new Discord.RichEmbed()
.setTitle(`💫 ${message.guild.name} 💫`)
.setColor(2490112)
.setTimestamp(new Date())
.addField('O comando utilizado foi', `**s!${command}**`)
.addField('O autor do comando foi', `${message.author}`, true)
.addField('O comando foi utilizado em', `${message.channel}`, true)
client.guilds.get("427238449028792322").channels.get("440702344146190337").send(embed);
try {
let commandFile = require(`./comandos a/${command}.js`);
commandFile.run(client, message, args);

} catch (err) {
    console.error("[CONSOLE] " + err);
}
})
client.on("message", async function(message) {
    if (message.content == '!report') {
    await  message.author.createDM()
   await message.author.send("**Voce quer reportar __'bug'__ ou __'player'__?**")
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 1000 * 20,max: 1})
    collector.on('collect', a => {
    if (a.content.toLowerCase() == 'player'){
    var player,hack;
    message.author.send("**Qual o nick do player?**")
    var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 20,max: 1})
    collector2.on('collect', b => {
    player = b.content;
  message.author.send('**Qual hack ele estava ultilizando?**')
  var collector3 =  message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id,{time: 1000 * 20,max: 1})
  collector3.on('collect', c => {
    hack = c.content;
    embed = new Discord.RichEmbed()
    .setTitle(`**REPORT** Autor: ${message.author.username}`)
    .setColor(2490112)
    .setTimestamp(new Date())
    .addField(`**TIPO DO REPORT**`, "**PLAYER**")
    .addField(`**NICK**`, `**${player}**`)
    .addField(`**HACK**`, `**${hack}**`)
    client.channels.get('438150308204511242').send(embed);
  })
  })
    }
    else if (a.content.toLowerCase() == 'bug'){
        var bug,server;
        message.author.send("**Qual era o bug?** ")
        var collector2 =  message.author.dmChannel.createMessageCollector(n => n.author.id == message.author.id,{time: 1000 * 20,max: 1})
        collector2.on('collect', b => {
        bug = b.content;
    message.author.send('**Qual servidor?**')
    var collector3 =  message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id,{time: 1000 * 20,max: 1})
    collector3.on('collect', c => {
        server = c.content;
        embed = new Discord.RichEmbed()
        .setTitle(`**REPORT** Autor: ${message.author.username}`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField(`**TIPO DO REPORT**`, "**BUG**")
        .addField(`**BUG**`, `**${bug}**`)
        .addField(`**SERVIDOR**`, `**${server}**`)
        client.channels.get('438150308204511242').send(embed);
    
    })
    })
    }
    })
    }
  }) // chat feliz
  client.on("message", message =>{
          var forbidenWords = [
              
              "Porra", 
              "Caralho",
              "Merda", 
              "Rola",
              "porra", 
              "caralho",
              "merda", 
              "Bucetao",
              "bucetao",
              "MushMC",
              "mushmc",
              "mush",
              "Sky",
              "bucetinha",
              "preto",
              "filha da puta",
              'cuzao',
              "lothus",
              "rola",
              "buceta",
              "LeooBaat",
              "twitter.com",
              "instagram.com",
              "youtube.com"
          ];
                      
          for (var i = 0; i < forbidenWords.length; i++) {
          if (message.content.includes(forbidenWords[i])) {
            message.delete();
            break;
          
        }
    }
})