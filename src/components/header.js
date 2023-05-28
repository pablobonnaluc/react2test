 import DrawerAppBar from './menu'
 import MiniDrawer from './minivariandrawer'
 
//import DrawerAppBar2 from './drawermenu'

function Header(props) {
    
    return (
        
        <div className="header">
            {props.title}

            {/* <DrawerAppBar /> */}

            {/* <DrawerAppBar2 /> */}
            {/* <MiniDrawer /> */}
            

            {/* <div id="sidebar">
                <nav>
                <ul>
                    <li>
                        <Link to='/tareas' className='routelink'> Tareas</Link>
                    </li>
                    <li>
                        <Link to={'contacts'} className='routelink'>Contacto</Link>
                    </li>
                </ul>
                </nav>
            </div> */}
            
        </div>
    )

}


export default Header;