import { useState } from "react";

const Home = () => {
    //let name = 'Hasira';
    const [name, setName] = useState('Mahel');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Umayanga');
        setAge(23);
    }

    return (
        <div className="Home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home; 