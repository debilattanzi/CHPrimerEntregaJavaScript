function saludar() {
    let usuario = prompt("Ingrese su Nombre y apellido");
    alert("Bienvenido/a a Farmacia Social " + usuario);

    const turno = [1, 2];
    let turnoIngresado;

    if (turnoIngresado = parseInt(prompt("Ingrese 1 para atención por OBRA SOCIAL o ingrese 2 para atención PARTICULAR"))) {

        while (turnoIngresado != turno[0] && turnoIngresado != turno[1]) {
            alert("Por favor ingrese 1 o 2");
            turnoIngresado = parseInt(prompt("Por favor, ingrese 1 para atención por OBRA SOCIAL o ingrese 2 para atención PARTICULAR"));
        }

        if (turnoIngresado === turno[0]) {
            alert("Señor/a " + usuario + ", Usted a seleccionado atención por OBRA SOCIAL");
            confirm("Usted sera atendido a la brevedad");
        }
        else if (turnoIngresado === turno[1]) {
            alert("Señor/a " + usuario + ", Usted a seleccionado atención PARTICULAR");
            confirm("Usted sera atendido a la brevedad");
        }
    } else {
        alert("Señor/a " + usuario + ", Usted no a seleccionado ninguna opción válida");
    }
}

saludar();