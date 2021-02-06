import React from 'react'

import BlogList from './BlogList';
import useFetch from './useFetch';
function Home() {
    const {data, isPending}  = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            <h2>Homepage</h2>
            {isPending && <div>Loading..... </div>}
            <BlogList blogs={data}  />
        </div>
    )
}

export default Home
