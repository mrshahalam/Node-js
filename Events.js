                                //Events Module 
//Node.js has a built-in where you can create-, module, called "Events" 
//where u can creste ,  fire,  and listen for your own events
//, fire-, and listen for- your own events. for the event to be fired only one time using once.
//Example 1— Registering for the event to be fired only one time using once.
//Example 2 — Registering Create an event emitter instance and register a couple of callbacks 
//Example 3 — Registering for the event with callback parameters

const EventEmitter  = require("events"); 

const  event = new EventEmitter();

// event.on('sayshaalam',()=>{
//     console.log("my name is Shah Alam");
// });
// event.on('sayshaalam',()=>{
//     console.log("my name is Shah Alam");
// });
// event.on('sayshaalam',()=>{
//     console.log("my name is Shah Alam");
// });
// event.emit('sayshaalam');
event.on("checkpage",(sc,msg)=>{
    console.log('status code is ${sc} and the page is ${msg}');
});

event.emit("checkpage",200,"ok")
