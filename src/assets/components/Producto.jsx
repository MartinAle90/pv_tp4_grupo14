import React, { useState, useEffect, useMemo, useCallback } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Producto() {
    const [productos, setProductos] = useState([]); // Lista de productos

    // Se usa useEffect para mostrar los cambios en el array de productos
    // Se ejecuta cada vez que el array de productos cambia
    useEffect(() => {
        console.log("Productos actualizados:", productos);
    }, [productos]);

    // Función para agregar un producto. Se usa useCallback para evitar recreaciones innecesarias
    // las recreaciones se refieren a la creación de una nueva función en cada renderizado
    const agregarProducto = (nuevoProducto) => {
        setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
    };

    //Lo que se muestra en la pantalla
    return (
        <div>
            <h1>Gestión de Productos</h1>
            {/* Formulario para agregar productos */}
            <ProductForm addProduct={agregarProducto} />
            {/* Lista de productos */}
            <ProductList productos={productos} />
        </div>
    );
}

export default Producto;