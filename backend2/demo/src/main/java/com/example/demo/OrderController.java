package com.example.demo;


import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class OrderController {

    @PostMapping("/order")
    public BillResponse placeOrder(@RequestBody List<CartItem> cart) {

        int total = 0;

        for (CartItem item : cart) {
            total += item.getPrice() * item.getQty();
        }

        return new BillResponse(cart, total, "Order Confirmed ✅");
    }

    @GetMapping("/test")
    public String test() {
        return "API Working ✅";
    }
}