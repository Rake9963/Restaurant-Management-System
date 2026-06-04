package com.example.demo;


import java.util.List;

public class BillResponse {

    private List<CartItem> items;
    private int total;
    private String message;

    public BillResponse() {}

    public BillResponse(List<CartItem> items, int total, String message) {
        this.items = items;
        this.total = total;
        this.message = message;
    }

    public List<CartItem> getItems() { return items; }
    public int getTotal() { return total; }
    public String getMessage() { return message; }

    public void setItems(List<CartItem> items) { this.items = items; }
    public void setTotal(int total) { this.total = total; }
    public void setMessage(String message) { this.message = message; }
}