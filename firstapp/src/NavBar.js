const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The First App</h1>
            <div className="links">
                <a href="/">Home</a>
            <a href="/create" /* style={{

                Inline Styling
                
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }} */>New Blog</a>
            </div>
        </nav>
    );
}
 
export default NavBar;