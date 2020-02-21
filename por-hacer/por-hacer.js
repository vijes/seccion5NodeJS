const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];


const guardarDB = () => {
    console.log('guardar DB');
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) {
            console.log('No se pudo crear el archivo ', err);
        } else {
            console.log('El archivo se creo correctamente');
        }
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../DB/data.json');

    } catch (e) {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};


const getListadoPorHacer = () => {
    cargarDB();
    return listadoPorHacer;
};

const updateLista = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    console.log(`Elemento a borrar ${descripcion}`);
    try {
        cargarDB();
        let indexTareaBorrar = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
        listadoPorHacer.splice(indexTareaBorrar, 1);
        guardarDB();
        return true;
    } catch (error) {
        console.log('Error ', error);
        return false;
    }

};

module.exports = {
    crear,
    guardarDB,
    getListadoPorHacer,
    updateLista,
    borrar
}