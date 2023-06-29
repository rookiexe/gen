// Dependencies
const { MessageEmbed, Message } = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'yardım', // Command name
	description: 'Komut listesini görüntüleyin.    ', // Command description

    /**
     * Command exetute
     * @param {Message} message The message sent by user
     */
	execute(message) {
		const { commands } = message.client; // Get commands from the client
        
        message.channel.send(
            new MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Komut Liste')
            .setDescription(commands.map(c => `**\`${config.prefix}${c.name}\`**: ${c.description ? c.description : '*No description provided*'}`).join('\n')) // Mapping the commands
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	}
};
