const { chatInputCommandInteraction, SlashCommandBuilder} = require("discord.js");

module.exports = {
    data:new SlashCommandBuilder()
    .setName("emoji")
    .setDescription("Shows which emoji you are!"),
    execute(interaction) {
        
        const emoji = ['<:Angel:965498728716832849>',
            '<:Shy:965498728905572393>',
            '<:Embarrassed:965498729274703872>',
            '<:SmilingLove:965498729396310098>',
            '<:Laugh:965498729496977418>',
            '<:Demon:965498729501188156>',
            '<:Zany:965498729618636830>',
            '<:Stars:965498729639591976>',
            '<:Luck1:965498729790595132>',
            '<:Luck2:965498729987719178>',
            '<:Cool:965500146387419156>',
            '<:DiscordEmbarrassed:965503469421232160>',
            '<:DiscordAngel:965503469542866946>',
            '<:DiscordZany:965503469584789514>',
            '<:DiscordDemon:965503469618352178>',
            '<:Fire:966221284784603206>',
            '<:Monocle:966952286662299649>',
            '<:Kiss:966952326407540746>',
            '<:Futurist:966952326415917087>',
            '<:Spinning:966952326646607892>',
            '<:StarStruck:967362435679928320>',
            '<:Vador:971377003699798077>'];

        const picked = Math.floor(Math.random() * emoji.length);
        const final = emoji[`${picked}`];
        interaction.reply({content:`You are : `+final});
       
    }
}
