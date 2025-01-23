let turnoIngresado;
const turno = [1, 2];

function saludar() {
    let usuario = prompt("Ingrese su Nombre y Apellido");
    alert("Bienvenido/a a Farmacia Social " + usuario);

    if (turnoIngresado = parseInt(prompt("Ingrese 1 para atención por OBRA SOCIAL o ingrese 2 para atención PARTICULAR."))) {

        while (turnoIngresado != turno[0] && turnoIngresado != turno[1]) {
            alert("Por favor ingrese 1 o 2");
            turnoIngresado = parseInt(prompt("Por favor, ingrese 1 para atención por OBRA SOCIAL o ingrese 2 para atención PARTICULAR."));
        }

        if (turnoIngresado === turno[0]) {
            alert("Señor/a " + usuario + ", Usted ha seleccionado atención por OBRA SOCIAL.");
        }
        else if (turnoIngresado === turno[1]) {
            alert("Señor/a " + usuario + ", Usted ha seleccionado atención PARTICULAR.");
        }
    } else {
        alert("Señor/a " + usuario + ", Usted no a seleccionado ninguna opción válida.");
    }
}

function determinarTurno() {
    let decision;

    if (turnoIngresado === turno[0] || turnoIngresado === turno[1]) {
        decision = prompt('Por favor seleccione "A" para MEDICAMENTOS o "B" para OTRAS PRESTACIONES').toUpperCase();

        if (decision === "A") {
            alert("Usted será atendido a la brevedad por el sector de MEDICAMENTOS.");
        } else if (decision === "B") {
            alert("Usted será atendido a la brevedad por el sector de OTRAS PRESTACIONES.");
        }else {
            alert("Señor/a usted no ha seleccionado ninguna opción válida.");
            determinarTurno();
        } 
    }
}

function confirmar() {
    let confirmacion = confirm("¿Desea continuar?");

    if (confirmacion) {
        determinarTurno();
    } else {
        alert("Señor/a usted no ha seleccionado ninguna opción válida.");
    }
}

saludar();
confirmar();

