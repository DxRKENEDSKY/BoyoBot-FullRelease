/* 
 * Designed and Built by DxrkenedSky
 */

const Discord = require('discord.js');
const fs = require('fs');

var textFile = fs.readFileSync('./about', 'utf8');

exports.helpMessage = function (args, msg) {

    msg.channel.send("`I AM BOYO! THE GREAT WIZARD OF DUNGEONS & DRAGONS` \n\
This `HELP MESSAGE` will be updated as commands are added! ");
    
    if(msg.member.hasPermission("ADMINISTRATOR")) {
        msg.channel.send(msg.author + " is an ADMIN!");
    } else {
        msg.channel.send(msg.author + " is not an ADMIN");
    };

};

exports.about = function(msg, args) {
    
    console.log(textFile);
    msg.channel.send(textFile);
    
};