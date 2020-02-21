const optDescripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea para crear'
    }
};

const argv = require('yargs')
    .command(
        'crear',
        'Permite crear un objeto', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea para crear'
            }
        }
    )
    .command(
        'update',
        'Permite actualiza el estado completado de una tarea', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea para crear'
            },
            completar: {
                alias: 'c',
                default: true,
                desc: 'Marcacmo true a la tarea por hacer'
            }
        }
    ).command(
        'borrar',
        'Borra un elemento mediante la descripcion', {
            descripcion: {
                demand: true,
                desc: 'Descripcion del elemento a borrar',
                alias: 'd'
            }
        }
    )
    .help()
    .argv;

module.exports = {
    argv
}