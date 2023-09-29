import { useState } from 'react';

const DropDown = () => {
    const [ display, setDisplay ] = useState('none');
    const handleClick = () => display === 'none' ? setDisplay('block') : setDisplay('none');

    return (
        <>
            <div className='header-dropdown'>
                <button onClick={handleClick} className='header-dropdown-btn'></button>
                <ul style={{display: display}} className='header-dropdown-nav'>
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
                <div className='backdrop'></div>
            </div>
        </>
    )
}

export default DropDown;