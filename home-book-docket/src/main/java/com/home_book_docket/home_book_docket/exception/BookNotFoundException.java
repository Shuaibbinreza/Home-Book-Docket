package com.home_book_docket.home_book_docket.exception;

public class BookNotFoundException extends RuntimeException{
    public BookNotFoundException(Long id){
        super("This book is not available");
    }
}
