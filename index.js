const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === "!셀치 뭐해") {
        // "밤새서 몽롱해요"으로 되돌려 칩니다.
      message.reply("밤새서 몽롱해요");
    }
  });
 
  client.on('message', message => {
    if (message.content === "!셀치 죽어") {
        // "메롱, 너나 죽어"으로 되돌려 칩니다.
      message.reply("메롱, 너나 죽어");
    }
  });

  client.on('message', message => {
    if (message.content === "!셀치 도움말") {
        // "!셀치 (하고픈말)"으로 되돌려 칩니다.
      message.reply("!셀치 (하고픈말)");
    }
  });

  client.on('message', message => {
    if (message.content === "!셀치 귀여워") {
        // "아 뭐예요;;"으로 되돌려 칩니다.
      message.reply("아 뭐예요;;");
    }
  });

client.on('message', message => {
  if (message.content === "!셀치 안녕") {
      // "아 뭐예요;;"으로 되돌려 칩니다.
    message.reply("아 뭐예요;;");
  }
});

client.on('message', message => {
    if (message.content === "!셀치 사랑해") {
        // "나두 사랑해♥"으로 되돌려 칩니다.
      message.reply("나두 사랑해♥");
  }
});

client.login('NzA4MDM5NTg3NTAyNzUxNzg2.XrR7hQ.2HwXTriDUQ-kOKD5EOyDyj8i30I');