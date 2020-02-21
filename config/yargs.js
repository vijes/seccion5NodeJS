const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea para crear'
};
const completar = {
    alias: 'c',
    default: true,
    desc: 'Marcacmo true a la tarea por hacer'
}

const argv = require('yargs')
    .command(
        'crear',
        'Permite crear un objeto', {
            descripcion
        }
    )
    .command(
        'update',
        'Permite actualiza el estado completado de una tarea', {
            descripcion,
            completar
        }
    ).command(
        'borrar',
        'Borra un elemento mediante la descripcion', {
            descripcion
        }
    )
    .help()
    .argv;

module.exports = {
    argv
}