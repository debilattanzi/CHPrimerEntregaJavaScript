
function mostrarMensaje(mensaje) {
    let contenedorMensaje = document.getElementById("mensaje");
    contenedorMensaje.innerHTML = mensaje;
}


function saludar() {
    let usuario = document.getElementById("nombre").value;

    if (usuario === "") {
        mostrarMensaje("Ingrese su Nombre y Apellido");
        return;
    }

    mostrarMensaje(`Bienvenido/a ${usuario}.<br>
        <button class='btn btn-primary mt-2' onclick='seleccionarTurno(1, "${usuario}")'>Obra Social</button> 
        <button class='btn btn-secondary mt-2' onclick='seleccionarTurno(2, "${usuario}")'>Particular</button>`);


    document.getElementById("nombre").value = "";
}

function seleccionarTurno(opcion, usuario) {
    let eleccion

    if (opcion === 1) {
        eleccion = "OBRA SOCIAL";
    } else if (opcion === 2) {
        eleccion = "PARTICULAR";
    }

    mostrarMensaje(`Usted ha elegido ${eleccion} para ${usuario}.<br>
        <button class='btn btn-success mt-2' onclick='determinarTurno("A")'>Medicamentos</button> 
        <button class='btn btn-warning mt-2' onclick='determinarTurno("B")'>Otras Prestaciones</button>`);
}


function determinarTurno(opcion) {


    if (opcion === "A") {
       mostrarMedicamentos();
    } else{
        mostrarPrestaciones();
    }
}

let medicamentos = [
    { nombre: 'Aspirina', precio: 100 },
    { nombre: 'Clonazepam', precio: 200 },
    { nombre: 'Amoxicilina', precio: 300 },
    { nombre: 'Penicilina', precio: 400 },
    { nombre: 'Ciclosporina', precio: 500 },
    { nombre: 'Levotiroxina', precio: 600 },

]

function mostrarMedicamentos() {
    let contenedorMedicamentos = document.getElementById("medicamentos");
    contenedorMedicamentos.innerHTML = "";
    for (let i = 0; i < medicamentos.length; i++) {
        let medicamento = medicamentos[i];
        let contenedorMedicamento = document.createElement("div");
        contenedorMedicamento.className = "card";
        contenedorMedicamento.innerHTML = `<div class='card-body'>
            <h5 class='card-titulo'>${medicamento.nombre}</h5>
            <p class='card-texto'>Precio: $${medicamento.precio}</p>
            <button class='btn btn-primary mt-2' onclick='pedirMedicamento("${medicamento.nombre}")'>Pedir</button>
        </div>`;

        contenedorMedicamentos.appendChild(contenedorMedicamento);
    }
    document.getElementById("mensaje").appendChild(contenedorMedicamentos);
}


function pedirMedicamento(medicamento) {
    mostrarMensaje("Usted ha pedido " + medicamento + "</b>.");

    mostrarMedicamentos();
}

let prestaciones = [
    { nombre: 'Dermatologia' },
    { nombre: 'Maquillaje' },
    { nombre: 'Perfumeria' },
]


function mostrarPrestaciones() {
    document.getElementById("busquedaPrestaciones").classList.remove("ocultar");
    document.getElementById("busquedaPrestaciones").classList.add("mostrar");
    document.getElementById("filtrar").addEventListener("click", function () {
        let opcion = document.getElementById("filtroPrestaciones").value.trim().toLowerCase();
        let prestacionesFiltradas = prestaciones.filter(prestacion => prestacion.nombre.toLowerCase().includes(opcion));
        document.getElementById("filtroPrestaciones").value = "";

        mostrarListadoPrestaciones(prestacionesFiltradas);
    });
}

function mostrarListadoPrestaciones(prestacionesFiltradas) {
    let contenedorPrestaciones = document.getElementById("prestaciones");
    contenedorPrestaciones.innerHTML = "";

    if (prestacionesFiltradas.length > 0) {
        prestacionesFiltradas.forEach(prestacion => {
            let contenedorPrestacion = document.createElement("div");
            contenedorPrestacion.className = "card2";
            contenedorPrestacion.innerHTML = "<h5 class='card-titulo'> " + prestacion.nombre + "</h5>";
            
            
            contenedorPrestaciones.appendChild(contenedorPrestacion);
        });
    } else {
        contenedorPrestaciones.innerHTML = "<h5>No se encontraron prestaciones con ese nombre.</h5>";
    }
}

let titulo = document.getElementById("titulo-nosotros");
titulo.addEventListener("mouseover", function () {
    titulo.style.color = "#4d4d4d";
});

titulo.addEventListener("mouseout", function () {
    titulo.style.color = "#000000";
});