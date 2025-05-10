import React from "react";

//el componente ProductItem recibe un producto y lo muestra
function ProductItem({ producto }) {
    return (
        <li>
            <strong>{producto.nombre}</strong> - {producto.marca} - ${producto.precioUnitario} -{" "}
            {producto.descuento}% descuento - Precio con descuento: $
            {producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock} -{" "}
            {producto.estado ? "Activo" : "Inactivo"}
        </li>
    );
}

export default ProductItem;