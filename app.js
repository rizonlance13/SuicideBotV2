const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "^"
client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'Help')) {
		  message.channel.sendMessage(`\`            [HELP COMMANDS]                                                                                             \n[BC]BUY COMMANDS                                                                                             \n^Buy_Bc_Weekly                                                                                             \n^Buy_Bc_Month                                                                                             \n^Buy_Bc_Lifetime                                                                                             \n[TBC]BUY COMMANDS                                                                                             \n^Buy_Tbc_Week                                                                                             \n^Buy_Tbc_Month                                                                                             \n^Buy_Tbc_Lifetime                                                                                             \n[OBC]BUY COMMANDS                                                                                             \n^Buy_Obc_Week                                                                                             \n^Buy_Obc_Month                                                                                             \n^Buy_Obc_Lifetime                                                                                             \n[Don't Try Typing those words if you dont really want to BUY. Trollers=Ban]                                                                                             \n[Others]                                                                                             \n^Prices                                                                                             \n \``);
	 } else

	if (message.content.startsWith(prefix + 'Buy_Bc_Access_Week')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase BC For a Week =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Bc_Access_Month')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase BC For a Month =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Bc_Access_Lifetime')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase BC For a Lifetime =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Tbc_Access_Week')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase TBC For a Week =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Tbc_Access_Month')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase TBC For a Month =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Tbc_Access_Lifetime')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase TBC For a Lifetime =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Obc_Access_Week')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase OBC For a Week =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Obc_Access_Month')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase OBC For a Month =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_Obc_Access_Lifetime')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase OBC For a Lifetime =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_All_Access_Week')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase All For a Week =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_All_Access_Month')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase All For a Month =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
	} else

	if (message.content.startsWith(prefix + 'Buy_All_Access_Lifetime')) {
			client.channels.get('396939759848783872').sendMessage('Wants To Purchase All For a Lifetime =' + message.author);
			message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
  } else

	if (message.content.startsWith(prefix + 'Prices')) {
		  message.channel.sendMessage('\`[ BC ] Access\n			          Weekly : 100 R$ / 1.00 $ / 50 Php\n          Monthly : 250 R$ / 2.50 $ / 125 Php\n          Lifetime : 400 R$ / 4.00 $ / 200 Php\n\n[ Tbc ] Access \n           Weekly : 150 R$ / 1.50 $ / 75 Php\n          Monthly : 300 R$ / 3.00 $ / 150 Php\n          Lifetime :  450 R$ / 4.50 $ / 225 Php\n\n[ Obc ] Access \n\n          Weekly : 200R$ / 2.00 $ / 100 Php\n          Monthly : 350 R$ / 3.50 $ / 175 Php\n          Lifetime : 500 R$ / 5.00 $ / 250 Php\n\`\n\`[ All ] Access \n\n          Weekly : 400 R$ / 4.00 $ / 200 Php\n          Monthly : 600 R$ / 6.00 $ / 300 Php\n          Lifetime : 900 R$ / 9.00 $ / 450 Php\n\nLifetime : 500 R$ / 5.00 $ / 250 Php\n\nOnly Have @💎Sellers💎 Role Can Sell\nSellers For Now : @Mr.Suicider#0645\` ')
	 }
});

client.login(token);
