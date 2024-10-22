import { useEffect } from "react";
import { useState } from "react";

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
                blogs.map(blog =>  <h1 key={blog.id} className="font-bold text-3xl " >Name:{blog.author}</h1>)
}
        </div>
    );
};

export default Blogs;