const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Odd is better.'));
app.listen(port, () => console.log(`Your app is listening at http://localhost:${port}`));

const charModMail = require('char-mod-mail');

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  // Set Discord activity
  client.user.setActivity({
    name: "Modmails",
    type: "WATCHING"
  });
  
  // Important Changing Area
  charModMail.ModMail(client, {
    guildID: "1272739732333527090", 
    categoryID: "1293358208009633813", 
    staffRole: "1293358022843961455", 
    embedColor: "#2f3136", 
    anonymousReply: false, 
    closedTitle: "Your Mod Mail Has Been Closed",
    closedMessage: "A Staff Member Has Deleted Your Mod Mail!",
    staffOpenedTitle: "User Opened Mod Mail",
    staffOpenedMessage: "The User Opened A Mod Mail And Is Now Waiting For A Reply!",
    userOpenedTitle: "Mod Mail Created",
    userOpenedMessage: "You Created A Mod Mail Ticket. Now explain why you made the modmail!",
    wrongEmoji: "❎", 
    rightEmoji: "✅" 
  });
});
