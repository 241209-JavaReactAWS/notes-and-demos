package com.revature.services;

import com.revature.models.Item;
import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {

    private final Logger logger = LoggerFactory.getLogger(InvoiceService.class);

    // Recall that this class is a consumer of the order topic and will "produce" an invoice to be sent to
    // the user/ charged to their account
    // TODO Add a group ID field
    @KafkaListener(topics = "orders", groupId = "invoice-group")
    public void createInvoice(Order order){
        // Once an order is received we should calculate the total price of everything and then
        // invoice the customer
        double finalPrice = 0;

        for (Item item: order.getCart()){
            finalPrice += item.getPrice() * item.getQuantity();
        }

        // Taxes
        finalPrice *= 1.07;

        // Round final price to 2 decimals
        finalPrice = Math.round(finalPrice * 100.0) / 100.0;

        // "send" the invoice
        logger.info("Invoice created. Total price is " + finalPrice);

    }
}
