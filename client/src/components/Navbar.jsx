import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return <div>
        <div className="flex justify-center w-full bg-slate-300">
            <Link to="/" className='m-3 cursor-pointer'>Home</Link>
            <Link to="/upload" className='m-3 cursor-pointer'>Upload Images</Link>
        </div>
    </div>
}

export default Navbar;