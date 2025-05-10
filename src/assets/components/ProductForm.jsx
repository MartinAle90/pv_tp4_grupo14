import React, { useState } from "react";

function ProductForm({ addProduct }) {
    const [nuevoProducto, setNuevoProducto] = useState({
        id: "",
        nombre: "",
        marca: "",
        precioUnitario: "",
        descuento: "",
        stock: "",
        estado: true,
    });

    // Función para calcular el precio con descuento
    const calcularPrecioConDescuento = (precioUnitario, descuento) => {
        return precioUnitario * (1 - descuento / 100);
    };

    const manejarSubmit = (evento) => {
        evento.preventDefault();
        // Se verifica que todos los campos estén completos
        if (
            nuevoProducto.id &&
            nuevoProducto.nombre &&
            nuevoProducto.marca &&
            nuevoProducto.precioUnitario &&
            nuevoProducto.descuento &&
            nuevoProducto.stock
        ) {
            // Si los campos estan completos, se crea un nuevo producto con los valores del formulario
            const productoConDescuento = {
                ...nuevoProducto,
                precioUnitario: parseFloat(nuevoProducto.precioUnitario),
                descuento: parseFloat(nuevoProducto.descuento),
                stock: parseInt(nuevoProducto.stock, 10),
                // Se calcula el precio con descuento llamando a la funcion calcularPrecioConDescuento
                precioConDescuento: calcularPrecioConDescuento(
                    parseFloat(nuevoProducto.precioUnitario),
                    parseFloat(nuevoProducto.descuento)
                ),
            };

            // Se agrega el nuevo producto a la lista
            addProduct(productoConDescuento);

            // Luego de agregar el producto, se reincian los campos del formulario
            setNuevoProducto({
                id: "",
                nombre: "",
                marca: "",
                precioUnitario: "",
                descuento: "",
                stock: "",
                estado: true,
            });
        } else {
            // Si no se completan todos los campos, se muestra un mensaje de alerta
            alert("Por favor, complete todos los campos.");
        }
    };

    return (
        // Formulario para agregar un nuevo producto
        // Se usa el evento onSubmit para manejar el envio del formulario
        <form onSubmit={manejarSubmit}>
            {/* Campos del formulario */}
            {/* Se usan inputs controlados para manejar el estado del formulario */}
            <h2>Agregar Producto</h2>
            <input
                type="text"
                placeholder="ID"
                value={nuevoProducto.id}
                onChange={(evento) => setNuevoProducto({ ...nuevoProducto, id: evento.target.value })}
            />
            <input
                type="text"
                placeholder="Nombre"
                value={nuevoProducto.nombre}
                onChange={(evento) => setNuevoProducto({ ...nuevoProducto, nombre: evento.target.value })}
            />
            <input
                type="text"
                placeholder="Marca"
                value={nuevoProducto.marca}
                onChange={(evento) => setNuevoProducto({ ...nuevoProducto, marca: evento.target.value })}
            />
            <input
                type="number"
                placeholder="Precio Unitario"
                value={nuevoProducto.precioUnitario}
                onChange={(evento) =>
                    setNuevoProducto({ ...nuevoProducto, precioUnitario: evento.target.value })
                }
            />
            <input
                type="number"
                placeholder="Descuento (%)"
                value={nuevoProducto.descuento}
                onChange={(evento) => setNuevoProducto({ ...nuevoProducto, descuento: evento.target.value })}
            />
            <input
                type="number"
                placeholder="Stock"
                value={nuevoProducto.stock}
                onChange={(evento) => setNuevoProducto({ ...nuevoProducto, stock: evento.target.value })}
            />
            <label>
                Estado:
                <input
                    type="checkbox"
                    checked={nuevoProducto.estado}
                    onChange={(evento) => setNuevoProducto({ ...nuevoProducto, estado: evento.target.checked })}
                />
            </label>
            <button type="submit">Agregar</button>
        </form>
    );
}

export default ProductForm;