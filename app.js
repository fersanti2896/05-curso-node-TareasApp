
import colors from 'colors';
import { inquiererMenu, leerInput, listadoTareasBorrar, pause }  from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDb = leerDB();

    if( tareasDb ) {
        tareas.cargarTareasFromArray( tareasDb );
    }

    do {
        opt = await inquiererMenu(); 
        
        switch (opt) {
            case '1':   
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
                break;
            
            case '2':
                tareas.listadoCompleto();
                break;
            
            case '3':
                tareas.listadoPendientesCompletados();
                break;
            
            case '4':
                tareas.listadoPendientesCompletados(false);
                break;
            
            case '5':
                console.log('')
                break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                tareas.borrarTarea({ id });
                break;
        }

        guardarDB( tareas.listadoArr );
        await pause();
    } while (opt !== '0');
}

main();