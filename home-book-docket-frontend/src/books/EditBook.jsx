import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditBook() {

    let navigate=useNavigate();
    const {id} = useParams();

    const [book, setBook] = useState({
        book_name:"",
        author_name:"",
        publisher:"",
        category:""
    })
    const{book_name, author_name, publisher, category} = book;

    const onInputChange=(e)=>{
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        loadBook();
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/book/${id}`, book);
        navigate("/");
    }

    const loadBook = async ()=>{
        const result = await axios.get(`http://localhost:8080/book/${id}`);
        setBook(result.data);
    }
    return (
        <div className='container1'>
            <div className="row">
                <div className="col-md-12 offset-md-3 rounded p-4 mt-2">
                    <div className="card">
                        <div className="card-header">
                            Edit Book
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e)=>onSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Book Name</label>
                                    <input type="text" name='book_name' className="form-control" id="book_name" aria-describedby="emailHelp" placeholder="book_name"
                                    value={book_name} onChange={(e)=>onInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Category</label>
                                    <input type="text" name='category' className="form-control" id="category" aria-describedby="emailHelp" placeholder="category" value={category} onChange={(e)=>onInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Publisher</label>
                                    <input type="text" name="publisher" className="form-control" id="publisher" aria-describedby="emailHelp" placeholder="Enter email" value={publisher} onChange={(e)=>onInputChange(e)}/>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Author Name</label>
                                    <input type="text" name="author_name" className="form-control" id="author_name" aria-describedby="emailHelp" placeholder="Enter email" value={author_name} onChange={(e)=>onInputChange(e)}/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Update</button>
                                <Link to={"/"} className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
