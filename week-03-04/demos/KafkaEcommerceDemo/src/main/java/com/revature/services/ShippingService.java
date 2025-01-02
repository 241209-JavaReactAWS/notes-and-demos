package com.revature.services;

import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ShippingService {

    private final Logger logger = LoggerFactory.getLogger(ShippingService.class);

    // This class will consume from the order topic and will produce to the work order topic
    @Autowired
    private KafkaTemplate<String, Order> kafkaTemplate;

    // Now I need a message that both listens and sends out the information to the work order topic
    @KafkaListener(topics = "orders", groupId = "shipping-group")
    public void createShippingLabel(Order order){
        logger.info("Creating label for " + order.getEmail());

        // Produce a message for the work order
        logger.info("Sending the following items to the work order topic: " + order.getCart());
        this.kafkaTemplate.send("work-orders", order);
    }
}
