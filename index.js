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
  client.user.setActivity("Watching Modmails);
  
  // Important Changing Area
  charModMail.ModMail(client, {
    guildID: "1272739732333527090", // put your guild id here
    categoryID: "1293358208009633813", // put your category id here
    staffRole: "1293358022843961455", // put your staff role id here
    embedColor: "#2f3136", // change the hex color code if you want
    anonymousReply: false, // make it false if only staff can reply or true for anyone
    closedTitle: "Your Mod Mail Has Been Closed",
    closedMessage: "A Staff Member Has Deleted Your Mod Mail!",
    staffOpenedTitle: "User Opened Mod Mail",
    staffOpenedMessage: "The User Opened A Mod Mail And Is Now Waiting For A Reply!",
    userOpenedTitle: "Mod Mail Created",
    userOpenedMessage: "You Created A Mod Mail Ticket. Now explain why you made the modmail!",
    wrongEmoji: "❎", // if you want, you can change but don't change it (recommended)
    rightEmoji: "✅" // if you want, you can change but don't change it (recommended)
  });
});
