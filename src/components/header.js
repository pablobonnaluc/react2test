import DrawerAppBar from './menu'

function Header(props) {
    
    return (
        <div className="header">
            {props.title}

            <DrawerAppBar />

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