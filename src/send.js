#!/usr/bin/env node
export { send }

var send = function() {
    var amqp = require('amqplib/callback_api'); // Library

    amqp.connect('amqp://localhost', function(error0, connection) {
        if(error0) {
            throw error0;
        }
    
        connection.createChannel(function(error1, channel) {
            if(error1){
                throw error1;
            }
            var queue = 'queue'; // queue to send to
            var msg = username; // message to send
    
            channel.assertQueue(queue, {
                durable: false
            })
    
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log("Sent %s", msg);
        });
    }); // Connect to server
  }

  








