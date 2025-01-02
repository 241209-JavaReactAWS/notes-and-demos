package com.revature.services;

import com.revature.models.Item;
import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@Service
public class FulfillmentService {

    private final Logger logger = LoggerFactory.getLogger(FulfillmentService.class);

    // This class consumes the work orders and will "package" the items as needed

    @KafkaListener(topics = "work-orders", groupId = "fulfillment-group")
    public void packageOrder(Order order){
        List<String> itemNames = new LinkedList<>();

        for (Item item: order.getCart()){
            itemNames.add(item.getName());
        }

        logger.info("Work order created! Packing the following items: " + Arrays.toString(itemNames.toArray()));
    }
}
