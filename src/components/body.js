
import { Outlet } from 'react-router-dom';

function Body(props) {

    

    return (
        <div className='body'>
            {/* { props.title ? props.title : 'Colocar aqui el cuerpo'} */}
            <div className='bodycontainer'>
                {/* <Tareas></Tareas> */}
                <Outlet />
            </div>
            
        </div>
    )
}

export default Body;