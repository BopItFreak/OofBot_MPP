global.config = require("./config.json");

var MPPclient = require("mpp-client");
global.client = new MPPclient("ws://proxys4.herokuapp.com");
client.setChannel("lobby");
client.start();
client.on("hi", function(){
  client.sendArray([{m:'userset', set: {name: config.botName}}]);
});
client.on("p",function(msg) {
  msg._id === client.getOwnParticipant()._id ? client.sendArray([{m:'userset', set: {name: config.botName}}]) : {};
});

client.on("a", require("./commandHandler"));
