import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create Blog</a>
            </div>
        </nav>
    )
}

export default Navbar
