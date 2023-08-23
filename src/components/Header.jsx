import NavBar from './NavBar';

const Header = function(){
    return(
        <>
            <div className='header'>
                <img className='header-logo' src='./img/logo.png' width='40px' height='40px' alt='Rick Guilliams Tree Service Logo'></img>
                <a className='header-cta' href='tel:5134737370'>Call: 513-473-7370</a>
                <NavBar/>    
            </div>        
        </>
    )
}

export default Header;