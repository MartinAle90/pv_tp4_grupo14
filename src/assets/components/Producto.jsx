import React, { useState, useEffect, useMemo, useCallback } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
//import SearchBar from './SearchBar';

const Producto = () => {
    // Estado para la lista de productos
    const [productos, setProductos] = useState([]);
  
    // Estado para búsqueda
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
  
    // Estado para producto en edición
    const [productoEditando, setProductoEditando] = useState(null);
  
    // Mostrar cambios en consola
    useEffect(() => {
      console.log('Productos actualizados:', productos);
    }, [productos]);
  
    // Filtrado optimizado
    const productosFiltrados = useMemo(() => {
        return productos.filter(producto =>
          producto.descripcion?.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          producto.id?.toString().includes(terminoBusqueda)
        );
      }, [productos, terminoBusqueda]);
  
    // Agregar o actualizar producto
    const agregarOActualizarProducto = producto => {
      setProductos(prev => {
        const existe = prev.findIndex(p => p.id === producto.id);
        if (existe !== -1) {
          const copia = [...prev];
          copia[existe] = producto;
          return copia;
        } else {
          return [...prev, producto];
        }
      });
      setProductoEditando(null);
    };
  
    // Eliminar producto por ID
    const eliminarProducto = id => {
      setProductos(prev => prev.filter(p => p.id !== id));
    };
  
    // Establecer producto a editar
    const editarProducto = producto => {
      setProductoEditando(producto);
    };
  
    return (
      <div className="app">
        <h1>Gestor de Productos</h1>
        {/*<SearchBar searchTerm={terminoBusqueda} setSearchTerm={setTerminoBusqueda} />*/}
        <ProductForm onSubmit={agregarOActualizarProducto} product={productoEditando} />
        <ProductList products={productosFiltrados} onDelete={eliminarProducto} onEdit={editarProducto} />
      </div>
    );
  };
  
export default Producto;