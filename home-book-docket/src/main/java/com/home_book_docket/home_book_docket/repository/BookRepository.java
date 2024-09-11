package com.home_book_docket.home_book_docket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home_book_docket.home_book_docket.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
    
}
