
import colors from 'colors';
import { inquiererMenu, pause }  from './helpers/inquirer.js';

const main = async() => {
    let opt = '';

    do {
        opt = await inquiererMenu(); 
        console.log({ opt });

        await pause();
    } while (opt !== '0');
}

main();