const ProductItem = ({ product, onDelete, onEdit }) => {
    return (
      <div className="product-item">
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Nombre:</strong> {product.nombre}</p>
        <p><strong>Marca:</strong> {product.marca}</p>
        <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p>
        <p><strong>Descuento:</strong> {product.descuento}%</p>
        <p><strong>Precio con Descuento:</strong> ${product.precioConDescuento.toFixed(2)}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Estado:</strong> {product.estado ? "Activo" : "Inactivo"}</p>
        <button id="botonEditar" onClick={onEdit}>Editar</button>
        <button id="botonEliminar"onClick={onDelete}>Eliminar</button>
      </div>
    );
  };
  
  export default ProductItem;
  