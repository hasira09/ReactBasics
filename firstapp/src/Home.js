const Home = () => {

    const handleClick = (e) => {
        console.log('Hello, Hasira!', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return (
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Tharushi', e)}>Click Me Again</button>
        </div>
    );
}
 
export default Home; 