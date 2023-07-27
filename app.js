
import colors from 'colors';
import { inquiererMenu, leerInput, pause }  from './helpers/inquirer.js';
import Tareas from './models/tareas.js';

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquiererMenu(); 
        
        switch (opt) {
            case '1':   
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
                break;
            
            case '2':
                console.log(tareas.listadoArr);
                break;

        }

        await pause();
    } while (opt !== '0');
}

main();