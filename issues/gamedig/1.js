  if (command === "serverinfo") {
    var interval = setInterval(function () {
      message.delete();
    Gamedig.query({
      type: 'fivem',
      host: config.ipabs, // This needs to be a string
      port: config.port // This needs to be a number & is optional, unless you're not using the default port for that gameserver type
    }).then((state) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Server Info")
        .addField('Name', state.name, true)
        .addField('Map', state.map, true)
        .addField('Connected', state.raw.clients, true)
        .addField('Max Players', state.maxplayers, true)
        // .addField('Ping', state.ping, true)
        .addField('Command F8', state.connect, true)
        .setTimestamp()
        .setColor('RANDOM')
      message.channel.send({ embeds: [embed] })
    }).catch((error) => {
      message.channel.send(`Server offline or not found.`);
      console.log(error);
    });
  }, 10000);
  }
