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

arrClientes = [];

function añadirCliente() {
    let cliente = new Cliente(document.getElementById("txNombre").value, document.getElementById("txApellidos").value, document.getElementById("txEmail").value, document.getElementById("phoneCliente").value);
    arrClientes.push(cliente);
    console.log(arrClientes);
    renderizarTablaClientes();
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
              <td>${cliente.phoneCliente}</td>
              <td></td>
            </tr>`
    });
}

arrViajes = []

function añadirViaje(){
    let viaje = new Viaje(document.getElementById("txCodigo").value, document.getElementById("txDestino").value, document.getElementById("txPrecio").value, document.getElementById("selTipoViaje").value);
    arrViajes.push(viaje);
    console.log(arrViajes);
    renderizarTablaViajes();
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

function añadirReserva(){
    
}