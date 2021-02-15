var data = msg.payload;
var TimedLoad = {};
TimedLoad.date = new Date().toString();
TimedLoad.tweet = data;
msg.payload = TimedLoad;
return msg;