var commands = require("./commands");
var _busy;
module.exports = function(msg) {
  if(msg.a.toLowerCase().includes("oof") && !msg.a.startsWith(config.cmdChar) && msg.p._id !== client.getOwnParticipant()._id) { 
			client.sendArray([{m:'a', message: "Oof!"}]);
	  }
  if (!msg.a.startsWith(config.cmdChar)) return;
  
  var args = msg.a.split(' ');
  var cmd = args[0].slice(1).toLowerCase();
  var txt = i => args.slice(i).join(' ').trim();
  var say = message => client.sendArray([{m:'a', message}]);
  var input = msg.a.substring(cmd.length + 1).trim();
  var busy = (userid, bool) => {
		_busy = {
			id: userid,
			isbusy: bool
		}		
}
  var command = commands[cmd];
  if (command) {
    try {
      command(msg, args, txt, say, input, busy);
    } catch(e) {
      say("⚠️ An error occured");
      console.error(e.stack);
    }
  }
  
}