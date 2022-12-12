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
    channel.assertQueue( {
      durable: false
    });

    channel.consume(queue, function(msg) {
      console.log(msg.content.toString());
    });
  });
});

amqp.connect('amqp://localhost', function(error0, connection) {
    if(error0) {
        throw error0;
    }

    connection.createChannel(function(error1, channel) {
        if(error1){
            throw error1;
        }
        var queue = 'queue'; // queue to send to
        var msg = 'Hell World'; // message to send

        channel.assertQueue(queue, {
            durable: false
        })

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log("Sent %s", msg);
    });
}); // Connect to server