import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewUser() {
    const [user, setUser] = useState({
        book_name:"",
        category:"",
        publisher:""
    });
    const {id} = useParams(); 

    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/book/${id}`);
        setUser(result.data);
        console.log(user);
    }

    useEffect(()=>{
        loadUser()
    }, []);
  return (
    <div>
        <h1>Name: {user.book_name}</h1>
        <h1>Email: {user.publisher}</h1>
        <h1>User name: {user.category}</h1>
    </div>
  )
}
