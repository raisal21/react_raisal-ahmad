import { Link, NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="avatar">
                    <div className="w-10 mask mask-squircle">
                        <img src="../../public/logo.svg" />
                    </div>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Libertas Fraternity</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink className="link no-underline" to="/">Home</NavLink></li>
                <li>
                    <details>
                    <summary>Article</summary>
                    <ul className="p-2">
                        <li><NavLink className="link no-underline" to="/article/libera-insight">Libera Insight</NavLink></li>
                        <li><NavLink className="link no-underline" to="/article/libera-explain">Libera Explain</NavLink></li>
                        <li><NavLink className="link no-underline" to="/article/libera-picks">Libera Picks</NavLink></li>
                    </ul>
                    </details>
                </li>
                <li><NavLink className="link no-underline" to="/discussion">Discussion</NavLink></li>
                <li><NavLink className="link no-underline" to="/about-us">About Us</NavLink></li>
                <li><NavLink className="link no-underline" to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="../../public/profile1.JPG" />
                    </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <NavLink className="justify-between link no-underline" to="/profile">
                            Profile
                            <span className="badge">New</span>
                        </NavLink>
                        </li>
                        <li><NavLink className="link no-underline" to="/settings">Settings</NavLink></li>
                        <li><NavLink className="link no-underline" to="/logouts">Logout</NavLink></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
        
    )}

