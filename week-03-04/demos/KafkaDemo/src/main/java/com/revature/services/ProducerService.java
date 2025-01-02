package com.revature.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProducerService {
    /*
    As a reminder this class with PRODUCE events that get sent to the event broker (in this case Apache
    Kafka) and any consumer listening on the specific topic will receive the message and do some operation
    with it
     */

    // Let's add a logger
    public static final Logger logger = LoggerFactory.getLogger(ProducerService.class);


    // Next thing we need to produce a message is the Kafka template
    // Field injection (technically bad practice) here for brevity
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    // This takes in Generics for Key and Value. The key will be the topic (think of it like a channel) and the value
    // will be the message itself. Anything tuned into the channel will get the message

    public void sendMessage(String message){
        // Log the message sent
        logger.info("Message sent -> " + message);

        // We need to actually send the event to kafka
        this.kafkaTemplate.send("test", message);
        // Again this send the message received to the "test" topic and anything listening on topic will receive it
    }

}
