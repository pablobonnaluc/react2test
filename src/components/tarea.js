import { AiFillDelete } from 'react-icons/ai';

function Tarea(props) {

    return (
        <div className='tareacontenedor'>
            <div className='tarea'>
                {props.description}
            </div>
            <div className='iconotarea' onClick={() => props.deleteTask(props.id)}>
                <AiFillDelete />
            </div>
        </div>
    )
    
}

export default Tarea;