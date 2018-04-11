

const Discord = require('discord.js');


const client = new Discord.Client();


const token = 'NDMzMjc1Mzc5NjgwMDE4NDQy.Da-rsw.UzCeHUJxdoIdCkx0OFIf4_qy6xo';



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



client.login(token);
