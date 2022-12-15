const { chatInputCommandInteraction} = require("discord.js");

module.exports = {
	name:"interactionCreate",

	/*
	*
	* @param{chatInputCommandInteraction}interaction
	*/
	execute(interaction, client){
		if(!interaction.isChatInputCommand())return;

		const command=client.commands.get(interaction.commandName);
		if(!command)return interaction.reply("This command is outdated",true);

		if(command.developer && interaction.user.id!=="782679979607064636"){
			interaction.reply("This command is for devs",true);
		}

		command.execute(interaction,client);
	}
}