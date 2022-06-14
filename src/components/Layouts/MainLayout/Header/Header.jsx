import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <Link to="/">Logo</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>                        
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}