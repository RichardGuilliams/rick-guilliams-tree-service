import NavBar from './NavBar';

const Header = function(){
    return(
        <>
            <div className='header'>
                <img className='header-logo' src='./img/logo.png' width='40px' height='40px' alt='Rick Guilliams Tree Service Logo'></img>
                <NavBar/>    
            </div>        
        </>
    )
}

export default Header;