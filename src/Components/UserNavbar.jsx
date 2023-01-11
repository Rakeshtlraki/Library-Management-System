const UserNavbar = () => {
    return (
        <div className="navbar">
            <div className="user">
                <h1>user</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link>H0me</Link>
                        <Link>Book List</Link>
                        <Link>User List</Link>
                        <Link>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserNavbar;