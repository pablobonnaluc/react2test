//import react from 'react';
import { Link } from "react-router-dom";
// import Tareas from './tareas'


function Header(props) {
    
    return (
        <div className="header">
            {props.title}
            <div id="sidebar">
                {/* other elements */}

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

                {/* other elements */}
            </div>
            
        </div>
    )

}


export default Header;