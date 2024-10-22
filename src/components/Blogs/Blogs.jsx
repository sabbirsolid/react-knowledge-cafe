import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog.jsx";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;