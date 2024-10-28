const importar = document.getElementById("importarProvincia");
const consultarLocalidad = document.getElementById("btnConsultarLocalidad");
const insertarSala = document.getElementById("insertarSala");
const insertarPelicula = document.getElementById("insertarPelicula");
const consultarPelis = document.getElementById("consultarPelis");


const opcionImportar = document.getElementById("importarProvincia");
const opcionLocalidades = document.getElementById("consultaLocalidad");
const opcionSalas = document.getElementById("nuevaSala");
const opcionPelicula = document.getElementById("nuevaPelicula");
const opcionPeliculas = document.getElementById("consultaPelicula");

//Formularios
const frmConsultaLocalidades = document.getElementById("frmConsultaLocalidades");
const frmRegSala = document.getElementById("frmRegSala");
const frmRegPeliculas = document.getElementById("frmRegPeliculas");
const frmConPeliculas = document.getElementById("frmConPeliculas");

// Evento en formulario

opcionLocalidades.addEventListener("click", mostrarFormConsultarLocalidades);
opcionSalas.addEventListener("click", mostrarFormNuevaSala);
opcionPelicula.addEventListener("click", mostrarNuevaPelicula);
opcionPeliculas.addEventListener("click", mostrarConsultaPeliculas);


//Importar datos
document.getElementById("importarProvincia").addEventListener("click", function () {
    fetch('importar/txt/Provincias.txt')
        .then(response => response.text())
        .then(data => {
            const lineas = data.split('\n'); // Separa las líneas
            lineas.forEach(line => {
                // Comprueba que la línea no esté vacía
                if (line.trim() !== '') {
                    fetch('php/insertarProvincias.php', {
                        method: 'POST',
                        body: line,
                        
                    })
                    .then(response => {
                        if (!response.ok) {
                            console.error("Error al importar la línea: " + line);
                        } else {
                            console.log("Provincia importada correctamente: " + line);
                        }
                    })
                    .catch(error => console.error("Error en la importación: ", error));
                }
            });
        })
        .catch(error => console.error("Error al leer el archivo Provincias.txt: ", error));
});

function cargarProvincias(selectId) {
    fetch("./php/consultaProvincias.php")
        .then(response => response.json())
        .then(provincias => {
            const select = document.getElementById(selectId);
            select.innerHTML = '<option value="">Seleccione una provincia</option>';
            provincias.forEach(provincia => {
                select.innerHTML += `<option value="${provincia.nombre}">${provincia.nombre}</option>`;
            });
        })
        .catch(error => {
            console.error('Error:', error); 
        });
}

function cargarLocalidades(selectIdLoc) {
    fetch("./php/consultaLocalidades.php")
        .then(response => response.json())
        .then(localidades => {
            const select = document.getElementById(selectIdLoc);
            select.innerHTML = '<option value="">Seleccione una localidad</option>';
           
            localidades.forEach(localidad => {
                select.innerHTML += `<option value="${localidad.poblacion}">${localidad.poblacion}</option>`;
            });
        })
        .catch(error => {
            console.error('Error:', error); 
        });
}





//Mostrar y Ocultar

ocultarTodosLosFormularios();

function ocultarTodosLosFormularios() {
    let oFormularios = document.querySelectorAll(".formularios");
  
    oFormularios.forEach(formulario => formulario.style.display = "none");

}

function mostrarFormConsultarLocalidades() {
    ocultarTodosLosFormularios();
    document.getElementById("consultaLocalidades").style.display = 'block';
    
    
}

function mostrarFormNuevaSala() {
    ocultarTodosLosFormularios();
    document.getElementById("salas").style.display = 'block';

}


function mostrarNuevaPelicula() {
    ocultarTodosLosFormularios();
    document.getElementById("peliculas").style.display = 'block';
}

function mostrarConsultaPeliculas() {
    ocultarTodosLosFormularios();
    document.getElementById("cpeliculas").style.display = 'block';
}