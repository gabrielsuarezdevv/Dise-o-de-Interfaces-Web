class Cliente {
    constructor(nombre, apellidos, email, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
    }

    getResumen() {
        return `${this.nombre} ${this.apellidos} - Email: ${this.email}, Teléfono: ${this.telefono}`;
    }
}

class Viaje {
    constructor(codigo, destino, precio, tipo) {
        this.codigo = codigo;
        this.destino = destino;
        this.precio = precio;
        this.tipo = tipo;
    }

    getInfo() {
        return `Código: ${this.codigo}, Destino: ${this.destino}, Precio: ${this.precio}, Tipo: ${this.tipo}`;
    }
}

class Vuelo extends Viaje {
    constructor(codigo, destino, precio, tipo, aerolinea, duracion) {
        super(codigo, destino, precio, tipo);
        this.aerolinea = aerolinea;
        this.duracion = duracion;
    }

    getInfo() {
        return `${super.getInfo()}, Aerolínea: ${this.aerolinea}, Duración: ${this.duracion} horas`;
    }
}

class Hotel extends Viaje {
    constructor(codigo, destino, precio, tipo, estrellas, tipoHabitacion) {
        super(codigo, destino, precio, tipo);
        this.estrellas = estrellas;
        this.tipoHabitacion = tipoHabitacion;
    }

    getInfo() {
        return `${super.getInfo()}, Estrellas: ${this.estrellas}, Tipo de Habitación: ${this.tipoHabitacion}`;
    }
}

class Paquete extends Viaje {
    constructor(codigo, destino, precio, tipo, vuelo, hotel) {
        super(codigo, destino, precio, tipo);
        this.vuelo = vuelo;
        this.hotel = hotel;
    }

    getInfo() {
        return `${super.getInfo()}, Vuelo: [${this.vuelo.getInfo()}], Hotel: [${this.hotel.getInfo()}]`;
    }
}

class Reserva {
    constructor(cliente, viaje) {
        this.cliente = cliente;
        this.viaje = viaje;
    }

    getResumen() {
        return `Reserva para ${this.cliente.getResumen()} - Viaje: [${this.viaje.getInfo()}]`;
    }
}

// Obtener la fecha del dia actual
const fechaActual = new Date();
const fechaLocal = fechaActual.toLocaleDateString('es-ES'); // 'es-ES' para español

arrClientes = [];

function añadirCliente() {
    let cliente = new Cliente(document.getElementById("txNombre").value, document.getElementById("txApellidos").value, document.getElementById("txEmail").value, document.getElementById("phoneCliente").value);
    arrClientes.push(cliente);
    console.log(arrClientes);
    renderizarTablaClientes();
    rellenarSelect("selClienteReserva", "Seleccionar Cliente", arrClientes, "nombre");
}

function renderizarTablaClientes() {

    // Borramos la tabla
    const list = document.getElementById("tablaClientes");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    // Pintamos de nuevo la tabla
    arrClientes.forEach(cliente => {
        document.getElementById("tablaClientes").innerHTML +=
            `<tr>
              <td scope="row">${cliente.nombre}</td>
              <td>${cliente.apellidos}</td>
              <td>${cliente.email}</td>
              <td>${cliente.telefono}</td>
              <td></td>
            </tr>`
    });
}

arrViajes = []

function añadirViaje() {
    let viaje = new Viaje(document.getElementById("txCodigo").value, document.getElementById("txDestino").value, document.getElementById("txPrecio").value, document.getElementById("selTipoViaje").value);
    arrViajes.push(viaje);
    console.log(arrViajes);
    renderizarTablaViajes();
    rellenarSelect("selViajeReserva", "Seleccionar Viaje", arrViajes, "destino");

}

function renderizarTablaViajes() {

    // Borramos la tabla
    const list = document.getElementById("tablaViajes");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    // Pintamos de nuevo la tabla
    arrViajes.forEach(viaje => {
        document.getElementById("tablaViajes").innerHTML +=
            `<tr>
              <td scope="row">${viaje.codigo}</td>
              <td>${viaje.destino}</td>
              <td>${viaje.precio}</td>
              <td>${viaje.tipo}</td>
              <td></td>
            </tr>`
    });
}

function rellenarSelect(idSelect, placeholder, arrSelector, propiedadTexto) {
    const select = document.getElementById(idSelect);

    // Limpiamos el select
    while (select.hasChildNodes()) {
        select.removeChild(select.firstChild);
    }

    // Con esto se añade el placeholder del select
    let firstOption = document.createElement("option");
    firstOption.value = ""; // Dejamos esto vacio para validaciones
    firstOption.textContent = placeholder;
    select.appendChild(firstOption);

    // Agregamos clientes o viajes dependiendo de donde se llame la funcion
    arrSelector.forEach(item => {
        const option = document.createElement("option");
        option.value = item[propiedadTexto]; 
        option.textContent = item[propiedadTexto];
        select.appendChild(option);
    });
}

arrReservas = [];

function añadirReserva(){
    let reserva = new Reserva(document.getElementById("selClienteReserva").value, document.getElementById("selViajeReserva").value);
    arrReservas.push(reserva);
    console.log(arrReservas);
    renderizarTablaReservas();
}

function renderizarTablaReservas() {

    // Borramos la tabla
    const list = document.getElementById("tablaReservas");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    // Pintamos de nuevo la tabla
    arrReservas.forEach(reserva => {
        document.getElementById("tablaReservas").innerHTML +=
            `<tr>
              <td scope="row">${reserva.cliente}</td>
              <td>${reserva.viaje}</td>
              <td>${fechaLocal}</td>
              <td></td>
            </tr>`
    });
}

/* ---- LOCALSTORAGE ----
       -- Clientes --
Convierte el array a una cadena JSON */
const arrClientesStr = JSON.stringify(arrClientes);
// Guarda la cadena en localStorage
localStorage.setItem("Clientes", arrClientesStr);
// Obtener la cadena desde localStorage
const arrClientesRecuperadoStr = localStorage.getItem("Clientes");
// Convierte la cadena JSON de nuevo a un array
const arrClientesRecuperado = JSON.parse(arrClientesRecuperadoStr);

//     -- Viajes -- 
const arrViajesStr = JSON.stringify(arrViajes);
localStorage.setItem("Viajes", arrViajesStr);
const arrViajesRecuperadoStr = localStorage.getItem("Viajes");
const arrViajesRecuperado = JSON.parse(arrViajesRecuperadoStr);

//   -- Reservas --
const arrReservasStr = JSON.stringify(arrReservas);
localStorage.setItem("Reservas", arrReservasStr);
const arrReservasRecuperadaStr = localStorage.getItem("Reservas");
const arrReservasRecuperada = JSON.parse(arrReservasRecuperadaStr);