exports.run = (client, message, args) => {
    if (message.guild.members.get(message.author.id).roles.find("name", "STAFF")) {
        const sayMessage = args.join(" ");

        message.channel.send(sayMessage);
    }
}