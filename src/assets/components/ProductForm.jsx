import React, { useState, useEffect } from 'react';

let ProductForm = ({ onSubmit, product }) => {
    // Estado del formulario
    const [producto, setProducto] = useState({
        id: "",
        nombre: "",
        marca: "",
        precioUnitario: "",
        descuento: "",
        stock: "",
        estado: true,
    });

    // Cargar datos del producto a editar si existe
    useEffect(() => {
        if (product) {
            setProducto(product);
        } else {
            setProducto({
                id: "",
                nombre: "",
                marca: "",
                precioUnitario: "",
                descuento: "",
                stock: "",
                estado: true,
            });
        }
    }, [product]);

    // Calcular precio con descuento
    const calcularPrecioConDescuento = (precioUnitario, descuento) => {
        return precioUnitario * (1 - descuento / 100);
    };

    // Manejar envío del formulario
    const manejarEnvio = (evento) => {
        evento.preventDefault();

        // Validar que todos los campos estén completos
        if (
            producto.id &&
            producto.nombre &&
            producto.marca &&
            producto.precioUnitario &&
            producto.descuento &&
            producto.stock
        ) {
            const productoProcesado = {
                ...producto,
                precioUnitario: parseFloat(producto.precioUnitario),
                descuento: parseFloat(producto.descuento),
                stock: parseInt(producto.stock, 10),
                precioConDescuento: calcularPrecioConDescuento(
                    parseFloat(producto.precioUnitario),
                    parseFloat(producto.descuento)
                ),
            };

            onSubmit(productoProcesado);

            
            // Reiniciar el formulario
            setProducto({
                id: "",
                nombre: "",
                marca: "",
                precioUnitario: "",
                descuento: "",
                stock: "",
                estado: true,
            });
        } else {
            alert("Por favor, complete todos los campos.");
        }   
    };

    return (
        <form onSubmit={manejarEnvio}>
            <h2>{product ? "Editar Producto" : "Agregar Producto"}</h2>
            <input
                type="number"
                placeholder="ID"
                min="1" // Asegura que el ID sea un número positivo
                value={producto.id}
                onChange={(e) => setProducto({ ...producto, id: e.target.value })}
                disabled={product} // Evita cambiar el ID si se está editando
            />
            <input
                type="text"
                placeholder="Nombre"
                value={producto.nombre}
                onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
            />
            <input
                type="text"
                placeholder="Marca"
                value={producto.marca}
                onChange={(e) => setProducto({ ...producto, marca: e.target.value })}
            />
            <input
                type="number"
                placeholder="Precio Unitario"
                min="0" // Asegura que el precio sea un número positivo
                step="0.01" // Permite decimales
                value={producto.precioUnitario}
                onChange={(e) => setProducto({ ...producto, precioUnitario: e.target.value })}
            />
            <input
                type="number"
                placeholder="Descuento (%)"
                min="0" // Asegura que el descuento sea un número positivo
                max="100" // Asegura que el descuento no supere el 100%
                value={producto.descuento}
                onChange={(e) => setProducto({ ...producto, descuento: e.target.value })}
            />
            <input
                type="number"
                placeholder="Stock"
                min="0" // Asegura que el stock sea un número positivo
                value={producto.stock}
                onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
            />
            <label>
                Estado:
                <input
                    type="checkbox"
                    checked={producto.estado}
                    onChange={(e) => setProducto({ ...producto, estado: e.target.checked })}
                />
            </label>
            <button type="submit">{product ? "Actualizar" : "Agregar"}</button>
        </form>
    );
};

export default ProductForm;