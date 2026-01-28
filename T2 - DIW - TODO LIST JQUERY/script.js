$(document).ready(function() {

    const inputTarea = $(".input-tarea");
    const btnAdd = $(".btn-primary");
    const tablaTareas = $("tbody");

    // Función para añadir tarea
    btnAdd.on("click", function() {
        const texto = inputTarea.val().trim();
        if (texto !== "") {
            const nuevaFila = `
                <tr class="tarea-fila pendiente">
                    <td class="texto-tarea">${texto}</td>
                    <td>
                        <button class="btn btn-success btn-sm btn-completar">Completar</button>
                        <button class="btn btn-warning btn-sm btn-editar">Editar</button>
                        <button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button>
                    </td>
                </tr>`;
            tablaTareas.append(nuevaFila);
            inputTarea.val("").focus();
        }
    });

    // Delegación de eventos para botones dinámicos
    tablaTareas.on("click", ".btn-completar", function() {
        const fila = $(this).closest("tr");
        fila.toggleClass("completada pendiente");
    });

    tablaTareas.on("click", ".btn-eliminar", function() {
        $(this).closest("tr").remove();
    });

    tablaTareas.on("click", ".btn-editar", function() {
        const fila = $(this).closest("tr");
        const celdaTexto = fila.find(".texto-tarea");
        const textoActual = celdaTexto.text();
        const nuevoTexto = prompt("Edita tu tarea:", textoActual);
        
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            celdaTexto.text(nuevoTexto);
        }
    });

    // Filtros
    $(".container-filtros .btn-info").on("click", function() {
        const filtro = $(this).text();
        
        $(".tarea-fila").each(function() {
            const fila = $(this);
            if (filtro === "Todas") {
                fila.show();
            } else if (filtro === "Completadas") {
                fila.hasClass("completada") ? fila.show() : fila.hide();
            } else if (filtro === "Pendientes") {
                fila.hasClass("pendiente") ? fila.show() : fila.hide();
            }
        });
    });
});