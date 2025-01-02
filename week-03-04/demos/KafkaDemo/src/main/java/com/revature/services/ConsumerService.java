package com.revature.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService {

    /*
    As a reminder this class with CONSUME different events that are posted to the apache kafka event broker
    and we will execute some code whenever one comes in
     */

    // Let's add in a logger
    public static final Logger logger = LoggerFactory.getLogger(ConsumerService.class);

    // Our consumer needs to listen to a specific topic inside the Kafka broker to get the appropriate message
    @KafkaListener(topics = "test", groupId = "test-group")
    public void consume(String message){
        logger.info("Message received -> " + message);
    }
}
