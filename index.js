global.config = require("./config.json");

var MPPclient = require("mpp-client");
global.client = new MPPclient("ws://www.multiplayerpiano.com:443");
client.setChannel("lobby");
client.start();
client.on("hi", function(){
  client.sendArray([{m:'userset', set: {name: config.botName}}]);
});

client.on("a", require("./commandHandler"));