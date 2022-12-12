#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
var _channel;
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
  
  _channel = channel;
  });
});

_channel.assertQueue( {
  durable: false
});

_channel.consume(queue, function(msg) {
  console.log(msg.content.toString());
});
