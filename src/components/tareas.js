
import {useState} from 'react'
import Tarea from './tarea';
import { v4 as uuidv4} from 'uuid';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function Tareas() {

    const [inputtaskvalue, setInputtaskvalue] = useState('');
    const [tareas , setTareas] = useState([]);

    function onInputDescriptionTask(e) {
        setInputtaskvalue(e.target.value);
    }

    function onAddTask(e) {

        e.preventDefault();

        const tarea=  {
            id: uuidv4(),
            description: inputtaskvalue
        }

        // agrega una tarea a la lista de tareas
        const tareasactuales = [tarea , ...tareas];

        console.log('tarea: ', tarea);
        setTareas(tareasactuales);

    }

    function deleteTask(id) {
        console.log('se va a eliminar la tarea:', id);
        const tareasposteliminacion = tareas.filter( (tarea) => {
            return tarea.id !== id;
        });

        console.log('tarea eliminada, resultadao arreglo:', tareasposteliminacion);
        setTareas(tareasposteliminacion);
    }

    return (
        <div className='tareas'>
            {/* { props.title ? props.title : 'Colocar aqui el cuerpo'} */}
                <div className='inputtaskcontainer'>
                    <input 
                        className='inputtask' 
                        onChange={onInputDescriptionTask} 
                        placeholder="Ingrese tarea" ></input>
                    <button 
                        className='buttonaddtask'
                        onClick={onAddTask}
                    >Agregar</button>
                     <Badge badgeContent={tareas.length} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                </div>
                <div className='listatareas'>
                {
                    tareas.map( (tarea) =>
                            <Tarea 
                                id={tarea.id}
                                key={tarea.id} 
                                description={tarea.description}
                                deleteTask={deleteTask}
                                >
                            </Tarea>
                        
                    )
                }
                </div>
            
        </div>
    )
}

export default Tareas;