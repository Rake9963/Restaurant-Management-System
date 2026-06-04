package com.example.demo;


import jakarta.persistence.*;
import java.util.List;

@Entity
public class order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int total;
    private String message;

    @ElementCollection
    private List<String> items;

    public order() {}

    public order(List<String> items, int total, String message) {
        this.items = items;
        this.total = total;
        this.message = message;
    }

    public Long getId() { return id; }
    public int getTotal() { return total; }
    public String getMessage() { return message; }
    public List<String> getItems() { return items; }

    public void setId(Long id) { this.id = id; }
    public void setTotal(int total) { this.total = total; }
    public void setMessage(String message) { this.message = message; }
    public void setItems(List<String> items) { this.items = items; }
}


