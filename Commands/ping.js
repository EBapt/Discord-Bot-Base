const { chatInputCommandInteraction, SlashCommandBuilder} = require("discord.js");

module.exports = {
    data:new SlashCommandBuilder()
    .setName("ping")
    .setDescription("says pong !"),
    execute(interaction) {
        interaction.reply({content:"Pong!"});/*.then(sentMessage => {
            const ping = sentMessage.createdTimestamp - message.createdTimestamp;
            sentMessage.edit(`Pong ! ${ping} ms`);
        });*/

    }
}
