package com.example.demo;


public class CartItem {

    private String name;
    private int price;
    private int qty;

    public CartItem() {}

    public String getName() { return name; }
    public int getPrice() { return price; }
    public int getQty() { return qty; }

    public void setName(String name) { this.name = name; }
    public void setPrice(int price) { this.price = price; }
    public void setQty(int qty) { this.qty = qty; }
}
