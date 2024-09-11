package com.home_book_docket.home_book_docket.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private Long id;
    private String book_name;
    private String author_name;
    private String category;
    private String publisher;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getBook_name() {
        return book_name;
    }
    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }
    public String getAuthor_name() {
        return author_name;
    }
    public void setAuthor_name(String author_name) {
        this.author_name = author_name;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getPublisher() {
        return publisher;
    }
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

}
