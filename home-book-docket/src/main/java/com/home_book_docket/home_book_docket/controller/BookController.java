package com.home_book_docket.home_book_docket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.home_book_docket.home_book_docket.exception.BookNotFoundException;
import com.home_book_docket.home_book_docket.model.Book;
import com.home_book_docket.home_book_docket.repository.BookRepository;

@RestController
@CrossOrigin("http://localhost:5173/")
public class BookController {
    @Autowired
    BookRepository bookRepository;

    @PostMapping("/book")
    Book newBook (@RequestBody Book newBook){
        return bookRepository.save(newBook);
    }

    @GetMapping("/books")
    List<Book> getAllBook(){
        return bookRepository.findAll();
    }
    
    @GetMapping("/book/{id}")
    Book getBookById(@PathVariable Long id){
        return bookRepository.findById(id)
                .orElseThrow(()->new BookNotFoundException(id));
    }

    @PutMapping("/book/{id}")
    Book userUpdate(@RequestBody Book newBook, @PathVariable Long id){
        return bookRepository.findById(id).map(book -> {
            book.setBook_name(newBook.getBook_name());
            book.setAuthor_name(newBook.getAuthor_name());
            book.setCategory(newBook.getCategory());
            book.setPublisher(newBook.getPublisher());
            return bookRepository.save(book);
        }).orElseThrow(()->new BookNotFoundException(id));
    }

    @DeleteMapping("/book/{id}")
    String deleteBook(@PathVariable Long id){
        if(!bookRepository.existsById(id)){
            throw new BookNotFoundException(id);
        }
        bookRepository.deleteById(id);
        return "Book with id " +id+ " has been deleted";
    }
}
