import React, { useState, useEffect, useCallback } from 'react';

const ProductForm = ({ onSubmit, product }) => {
    const [producto, setProducto] = useState({
        id: "",
        nombre: "",
        marca: "",
        precioUnitario: "",
        descuento: "",
        stock: "",
        estado: true,
    });

    // Cargar el producto si se está editando
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

    // Función para calcular el precio con descuento
    const calcularPrecioConDescuento = useCallback((precio, descuento) => {
        return precio * (1 - descuento / 100);
    }, []);

    // Función que se llama al enviar el formulario 
    const manejarEnvio = useCallback(
        (evento) => {
            evento.preventDefault();

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
                    estado: producto.estado // True o False
                };

                onSubmit(productoProcesado);

                // Reiniciar el formulario
                if (!product) {
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
            } else {
                alert("Por favor, complete todos los campos.");
            }
        },
        [producto, onSubmit, product, calcularPrecioConDescuento]
    );

    return (
        <form onSubmit={manejarEnvio}>
            <h2>{product ? "Editar Producto" : "Agregar Producto"}</h2>

            <input
                type="text"
                placeholder="ID"
                value={producto.id}
                onChange={(e) => setProducto({ ...producto, id: e.target.value })}
                disabled={product} // No permitir cambiar el ID al editar
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
                min="0"
                step="0.01"
                value={producto.precioUnitario}
                onChange={(e) => setProducto({ ...producto, precioUnitario: e.target.value })}
            />

            <input
                type="number"
                placeholder="Descuento (%)"
                min="0"
                max="100"
                step="0.01"
                value={producto.descuento}
                onChange={(e) => setProducto({ ...producto, descuento: e.target.value })}
            />

            <input
                type="number"
                placeholder="Stock"
                min="0"
                step="1"
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
                {producto.estado ? "Activo" : "Eliminado"}
            </label>

            <button type="submit">{product ? "Actualizar" : "Agregar"}</button>
        </form>
    );

};

export default ProductForm;