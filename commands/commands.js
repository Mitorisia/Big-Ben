exports.run = (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor("Commands", client.user.displayAvatarURL)
        .setDescription(`Use --help <commandname> for more details.`)
        .setColor('B6D6E7')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter("Any message from me can be removed by reacting with a ⏲ emoji.")
        .addField("__Info:__", "`commands` `help` `nextbong` `support`")
        .addField("__Utility:__", "`colour` `time` `translate` `weather`", true)
        .addField("__Search:__", "`img` `wiki` `youtube`", true)
        .addField("__Fun:__", "`8ball` `cat` `insult` `meme` `rightthere` `shut` `smug` `talk`")
        .addField("__NSFW:__", "**2D** `danbooru` `hentai` `hentaiirl` `neko` `rule34` `safebooru`\n\**3D** `ass` `boobs` `nsfw` `nsfwgif`")
    return message.channel.send({embed}).then(m=>m.react("⏲"))
}