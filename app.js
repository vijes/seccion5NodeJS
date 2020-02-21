// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'update':
        console.log('Actualiza la tarea por haer');
        let regsitroActualizado = porHacer.updateLista(argv.descripcion, argv.completado);
        console.log(`El registro ${argv.descripcion} se actualizo ${ regsitroActualizado }`);

        break;
    case 'listar':
        console.log('Lista todas las tareas por hacer');

        let listado = porHacer.getListadoPorHacer();
        if (listado.length === 0) {
            console.log('No se encontraron registros');
        } else {
            for (let tarea of listado) {
                console.log('====== Por hacer ======'.green);
                console.log(`Tarea:  ${ tarea.descripcion}`);
                console.log(`Estado: ${ tarea.completado}`);
                console.log('======================='.green);

            }
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`El elemento ${argv.descripcion} se borro: ${borrado}`);

        break;
    default:
        console.log('Comando no reconocido');
        break;

}