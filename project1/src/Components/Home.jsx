import React from "react";
import { Link, Outlet } from "react-router-dom";
import './home.css';

export default function Home() {
    return (
        <div className="Home">
            <div className='sidebar'>
                <h2>Sidebar</h2>
                <Link to={'/home/Home1'}>Home1</Link>
                <Link to={'/home/About1'}>About1</Link>
                <Link to={'/home/Contact1'} >Contact1</Link>
            </div>
            <div className="view">
                <Outlet />
            </div>
        </div>
    );
}
