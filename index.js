function pedirNombre() {
    let nombre = prompt("Hola, por favor, ingrese su nombre:");
    while (!nombre || nombre === "") {
        alert("Ingrese un nombre válido.");
        nombre = prompt("Hola, por favor, ingrese su nombre:");
    }
    return nombre;
}

function mostrarBienvenida(nombre) {
    alert(`Bienvenido a nuestro ecommerce, ${nombre}`);
}

function solicitarCategoria() {
    let categoria = prompt("¿Qué desea comprar? Elija la opción 1 si son remeras, opción 2 si son pantalones:");
    return categoria;
}

function confirmarCompra(categoriaElegida) {
    const precios = {
        "1": { nombre: "remera", precio: 10 },
        "2": { nombre: "pantalón", precio: 15 },
    };

    const categoria = precios[categoriaElegida.toLowerCase()];

    if (categoria) {
        let mensaje = `Usted eligió ${categoria.nombre}. El precio es de $${categoria.precio}. ¿Desea comprar este artículo?`;
        let quieroComprar = confirm(mensaje);
        if (quieroComprar) {
            confirmarEnvio();
        } else {
            alert("Muchas gracias por su visita.");
        }
    } else {
        alert("Debe elegir una opción válida para poder continuar con la compra.");
    }
}

function confirmarEnvio() {
    let direccion = prompt("Ingrese su dirección para poder realizar el envío del pedido:");
    alert(`Su artículo será enviado a ${direccion}.`);
    alert("Muchas gracias por su compra.");
}

let nombreUsuario = pedirNombre();
mostrarBienvenida(nombreUsuario);

let categoriaElegida = solicitarCategoria();
confirmarCompra(categoriaElegida);