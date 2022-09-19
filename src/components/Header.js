import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import kslogo1 from '../app/img/kslogo1.png';


const Header = () => {

    return (
        <Navbar dark color='' sticky='top' expand='md'>
             <NavbarBrand className='ms-5' href='/'>
                <img src={kslogo1} alt='KS Logo' className='float-start' />
                <h1 className = 'mt-1'></h1>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;