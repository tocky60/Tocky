

const Discord = require('discord.js');


const client = new Discord.Client();






client.on('ready', () => {
  console.log('I am ready!');
});



client.on('message', message => {




  if (message.content === 'ping') {

    message.channel.send('pong');
  }

  if (message.content === 'lucas'){
      message.channel.send('Hey',{files: ["lucas.jpg"]});
  }
    
});



client.login(process.env.TOKEN);
