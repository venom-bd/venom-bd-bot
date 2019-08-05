var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "%" //The text before commands, you can put anything that you prefer

    if(message.author.id != "605714296273502211" && message.channel.id === "592736982300491776"){
        if(msg.startsWith('%', 0)){
            if(msg === prefix + "hey" && message.channel.id === "592736982300491776"){
                message.channel.send('hi!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand %hey right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '%' .");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
