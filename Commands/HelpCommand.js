/* 
 * Designed and Built by DxrkenedSky
 */

const Discord = require('discord.js');
const fs = require('fs');

var textFile = fs.readFileSync('./about', 'utf8');

exports.helpMessage = function (args, msg) {

    msg.channel.send("Please refer to 'https://github.com/DxRKENEDSKY/BoyoBot-FullRelease' for a full list of commands. " );

};

exports.about = function(msg, args) {
    
    console.log(textFile);
    msg.channel.send(textFile);
    
};