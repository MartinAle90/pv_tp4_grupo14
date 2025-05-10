import ProductItem from "./ProductItem";

// El componente ProductList recibe una lista de productos y los muestra
// Se usa el metodo map para recorrer la lista de productos y renderizar un ProductItem
function ProductList({ productos }) {
    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map((producto) => (
                    <ProductItem key={producto.id} producto={producto} />
                ))}
            </ul>
        </div>
    );
}

export default ProductList;