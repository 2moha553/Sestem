const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const prefix = '#';
 client.on('message', message => {

 var ms = require('ms')

 var moment = require('moment');

 if (message.author.bot) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setImage("https://d.top4top.net/p_10880lo1r1.png")

 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');

 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)

 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
  if(time) {

  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})


  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')

  var moment = require('moment');


  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let muteRole = message.guild.roles.find("name", "Muted");

  let embed = new Discord.RichEmbed()

 .setImage("https://c.top4top.net/p_108825enp1.png")

  if (command == "mute") {

  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");

  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let Reason = message.content.split(" ").slice(4).join(" ");

  let time = messageArray[2];

  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)

  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");

  if(!Reason)  {

    message.guild.member(user).addRole(muteRole);

  }

   if(!Reason && time) {

    message.guild.member(user).addRole(muteRole);

   }

   if(!time) {

    message.guild.member(user).addRole(muteRole);

   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {

    message.guild.member(user).removeRole(muteRole);

   }, ms(time));

   }

   if(time && Reason && user) {

    message.guild.member(user).addRole(muteRole);


   setTimeout(() => {

    message.guild.member(user).removeRole(muteRole);

   }, ms(time));

   }

   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)

   }

});



client.on('message', message => {
      if(message.content.startsWith(prefix + 'mutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))

      if(message.mentions.users.size === 0) {
        return message.reply("منشن الشخص لتبي تعطيه ميوت.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(true);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });

  client.on('message', message => {
    if(message.content.startsWith(prefix + 'unmutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))

    if(message.mentions.users.size === 0) {
        return message.reply("منشن الشخص لتبي تفك عنه ميوت.");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("Try again.");
    }
    muteMember.setMute(false);
    if(muteMember) {
      message.channel.sendMessage("User muted successfully.");
    }
  }
});

client.on('message', message => {

    let args = message.content.split(' ').slice(1).join(' ');

  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }


  if (message.content.startsWith('#bc')) {
          if (!args[0]) {
message.channel.send("**#bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }

});

client.login(process.env.BOT_TOKEN);
