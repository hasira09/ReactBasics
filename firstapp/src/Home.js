import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Web Page', body: 'lorem ipsum...', author: 'Hasira', id: 1},
        { title: 'Welcome to React', body: 'lorem ipsum...', author: 'Mahel', id: 2},
        { title: 'React Dev Tools', body: 'lorem ipsum...', author: 'Tharushi', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Use Effect Ran');
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home; 