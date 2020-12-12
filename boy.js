const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const pakage = require("./package.json");
const chalk = require("chalk")
const { Client, MessageEmbed } = require("discord.js")

var prefix = ayarlar.prefix;

client.on("ready", () => {
    console.log(chalk.bold.green('Botunuz sunucuya başarı ile giriş yaptı.'))
    console.log(chalk.bold.blue(`Botun giriş yaptığı isim: ${client.user.tag}`))
  
  var oynuyorkısımları = [
    "Prefix: !",
    "FakeBoy| !ping",
    "Prefix: !| !v"
  ];

  client.user.setStatus("ide");


});


client.on("message", message => {
  if (message.content === "ping") {
    message.channel.send("pong!");
  }
  if (message.content === "+spam") {
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
    message.channel.send("Spam @everyone");
  }
});

client.on('message', message => {
  if(message.content === prefix +'v'){
      const embed = new MessageEmbed()
      .setTitle("Version Menüsü")
      .setDescription('Buradan botun versionuna bakabilirsiniz.')
      .setColor('RANDOM')
      .setThumbnail('http://toprakerol.com/wp-content/uploads/2020/12/Fake-Boy.jpg')
      .addField('Version => ', `Bot version ${pakage.version}`)
      .setTimestamp()
      .setAuthor(`Selam !v yazan kullanıcı ${message.author.username}`)
      
      message.channel.send(embed);
  }
})

client.on('message', message => {
	if(message.content === prefix +'yardım'){
		const embed = new MessageEmbed()
		.setTitle("Yardım Menüsü")
		.setDescription('Buradan bot ile ilgili yardım alabilirsiniz.')
		.setColor('RANDOM')
		.setThumbnail('http://toprakerol.com/wp-content/uploads/2020/12/Fake-Boy.jpg')
		.addField('Yardım => ', 'Eğer bota !v yazarsanız botun version kısmını verir.' + ' - bota ping diye yazarsanız pong yazar.' + ' - Eğer bota !komutlar yazarsanız size botun kısa bir şekilde bazı komutlarını verir.')
		.setTimestamp()
		.setAuthor(`Merhaba yardıma ihtiyaç duyan kullanıcı ${message.author.username}`)
		
		message.channel.send(embed);
	}
  })
  

client.on('message', message => {
  if(message.content === prefix +'komutlar'){
      const embed = new MessageEmbed()
      .setTitle("Komutlar Menüsü")
      .setDescription('Burası botun komutlarına bakılan bölümdür.')
      .setColor('RANDOM')
      .setThumbnail('http://toprakerol.com/wp-content/uploads/2020/12/Fake-Boy.jpg')
      .addField("Komutlar => ", `Botun komutları ` + '!v' + ' -  ping' + ' - !yardım')
      .setTimestamp()
      .setAuthor(`Merhaba değerli kullanıcımız ${message.author.username}`)
      
      message.channel.send(embed);
  }
})

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .kick('...')
          .then(() => {
            message.reply(`Adalet oluştu ve baaşarı ile ${user.tag} sunucudan atıldı.`);
          })
          .catch(err => {
            message.reply('Kişi atıldı');
            console.error(err);
          });
        } else {
          message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("Birisini tekmeleyemedin.");
    }
  }

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'genel');
    if (!channel) return;
    message.channel.send(`Hoşgeldin, ${member}`);
  });


  

  
});


client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .ban({
          reason: 'Banlanma sebebi, kurallara uymamasıdır!',
        })
        .then(() => {
          message.reply(`Artık banlandı ${user.tag}`);
        })
        .catch(err => {
          message.reply('I was unable to ban the member');
            console.error(err);
          });
        } else {
          message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("Üzgünüm, banlayamadın.");
    }
  }

});

client.login(ayarlar.token);