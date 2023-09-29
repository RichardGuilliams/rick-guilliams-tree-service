import { useState } from 'react';
import DropDown from './DropDown';

const NavBar = () => {
    // const [ display, setDisplay ] = useState('none');
    // const handleClick = () => display === 'block' ? setDisplay('block') : setDisplay('none');

    return (
        <>
            <DropDown/>
            <ul className='header-nav'>
                <li className='header-nav-item'>
                    <a className='header-link' href="/">Home</a>
                </li>
                <li className='header-nav-item'>
                    <a className='header-link' href="/services">Services</a>
                </li>
                <li className='header-nav-item'>
                    <a className='header-link' href="/reviews">Reviews</a>
                </li>
                <li className='header-nav-item'>
                    <a className='header-link' href="/about">About</a>
                </li>
                <li className='header-nav-item'>
                    <a className='header-link' href="/contact">Contact</a>
                </li>
            </ul>
        </>
    )
}

export default NavBar;