import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Web Page', body: 'lorem ipsum...', author: 'Hasira', id: 1},
        { title: 'Welcome to React', body: 'lorem ipsum...', author: 'Mahel', id: 2},
        { title: 'React Dev Tools', body: 'lorem ipsum...', author: 'Tharushi', id: 3}
    ])
    return (
        <div className="Home">
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>Written by { blog.title }</h2>
                        <p>Written by { blog.author}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Home; 