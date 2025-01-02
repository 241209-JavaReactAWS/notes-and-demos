package com.revature.services;

import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    // This class is a producer class that will ship off a new order to the orders topic

    private final Logger logger = LoggerFactory.getLogger(OrderService.class);

    // Recall to push events to the broker we need the KafkaTemplate object

    @Autowired
    private KafkaTemplate<String, Order> kafkaTemplate;

    // Now we need a method to publish the order

    public void sendOrder(Order order){

        logger.info("Sending a new order!");

        // We will send the message
//        this.kafkaTemplate.send("orders", order);

        // In the event we need to provide more complex information for the event manager we
        // can use the MessageBuilder API
        Message<Order> message = MessageBuilder
                .withPayload(order)
                .setHeader(KafkaHeaders.TOPIC, "orders")
                .build();

        this.kafkaTemplate.send(message);
    }
}
