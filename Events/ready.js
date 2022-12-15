const {loadCommands} = require("../Handlers/commandHandlers");

module.exports={
	name:"ready",
	once:true,
	execute(client){
		console.log("Your client is not ready!");
		loadCommands(client);
	}
}