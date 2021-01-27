import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
function Home() {
    const [blogs, setblogs] = useState([]);
    const [isPending, setisPending] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(res=>{
            return res.json()
        }).then(data=>{
                setblogs(data);
                setisPending(false);
            }
        )
    }, []);
    return (
        <div className="home">
            <h2>Homepage</h2>
            {isPending && <div>Loading..... </div>}
            <BlogList blogs={blogs}  />
        </div>
    )
}

export default Home
