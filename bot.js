const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDIwNDAxNjg2Nzc2MTE5MzE2.DX-KPQ.SozUKnVYlp-oBT5r2F4O-IHgglI);
