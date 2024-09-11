import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const [user, setUser] = useState({
        book_name:"",
        publisher:"",
        category:""
    })
    const{book_name, publisher, category} = user;

    const onInputChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/book", user);
        navigate("/");
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 rounded p-4 mt-2">
                    <div className="card">
                        <div className="card-header">
                            Add User Form
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e)=>onSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input type="text" name='book_name' className="form-control" id="book_name" aria-describedby="emailHelp" placeholder="Name"
                                    value={book_name} onChange={(e)=>onInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">User Name</label>
                                    <input type="text" name='publisher' className="form-control" id="publisher" aria-describedby="emailHelp" placeholder="username" value={publisher} onChange={(e)=>onInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="text" name="category" className="form-control" id="category" aria-describedby="emailHelp" placeholder="Enter email" value={category} onChange={(e)=>onInputChange(e)}/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={"/"} className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
