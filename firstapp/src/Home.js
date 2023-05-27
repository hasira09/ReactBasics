import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Web Page', body: 'lorem ipsum...', author: 'Hasira', id: 1},
        { title: 'Welcome to React', body: 'lorem ipsum...', author: 'Mahel', id: 2},
        { title: 'React Dev Tools', body: 'lorem ipsum...', author: 'Tharushi', id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Hasira')} title="Hasira's Blogs" />
        </div>
    );
}
 
export default Home; 