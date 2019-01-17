var usages = require("./usage"); 
module.exports = {
  help: function (msg, args, txt, say) {
    var commandList = Object.keys(require("./commands"));
    commandList = commandList.map(x => `${config.cmdChar}${x}`);
    commandList = commandList.join(", ");
    say(`Commands: ${commandList}`);
  },
  ofo: function (msg, args, txt, say) {
  say("ofo");
  },
  oof: function(msg, args, txt, say) {
  say("Oof!");
  },
  dadjoke: function(msg, args, txt, say) {
   let jokes = require('./jokes.json');
   say(jokes[Math.floor(Math.random() * jokes.length)])   
  },
  oofencode: function(msg, args, txt, say,input) {
  if(!args[1]) {say(usages.oofencode); return;}
  say(require("./oof.js").encode(input));
   
    
  },
  oofdecode: function(msg, args, txt, say, input) {
  if(!args[1]) {say(usages.oofdecode); return;}
  say(require("./oof.js").decode(input));
   
    
  },
  chat: function(msg,args,txt,say,input) {
  if(!args[1]) {say(usages.chat); return;}
  var getJSON = require("get-json");
  getJSON("https://api.susi.ai/susi/chat.json?q="+input, function(error, data){
	if(error){
      say("Something went wrong.");
      return;
    }else if(data.answers[0] && data.answers[0].actions){
      for(var action of data.answers[0].actions){ //what is this
        if(action.type == "answer"){
          say("> "+action.expression); // <-- Here, when susi says something
          return;
        }
      }
      say("> I didn't understand you, sorry.");
    }else{
      say("> I didn't understand you, sorry.");
    }
  });
  },
  fact: function(msg, args, txt, say) {
   let facts = require('./facts.json');
   say(facts[Math.floor(Math.random() * facts.length)])   
  },
  js: function(msg, args, txt, say,input) {     
	var safeEval = require('notevil')
		try {
        say('> ' + safeEval(input));
      } catch (e) {
        say('> ' + e);
      }
  },
  ping: function(msg, args, txt, say,input,time) {     
	say("Pong! (" + (Date.now() - time) + ")ms");
		
	
  },
  trumpquote: function(msg, args, txt, say,input,time) {     
	 if(!args[1]) {say(usages.donald); return;}
	const Tronald = require('tronalddump-io'),
      client = new Tronald();
	  client.search(input).then((res) => {
    say(res._embedded.quotes[Math.floor(Math.random() * res._embedded.quotes.length)].value);
	}).catch((err) => {
    //console.log(err);
	say("⚠️ No quote found! ⚠️");
	});
		
	
  },
  trumptweet: function(msg, args, txt, say,input,time) {     
	var TrumpTweets=require('trump-tweets');

	say(TrumpTweets());
		
	
  }
   
  
}