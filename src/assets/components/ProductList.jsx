import ProductItem from './ProductItem';

const ProductList = ({ productos, onDelete, onEdit }) => {
  return (
    <div className="product-list">
      {productos.map(producto => (
        <ProductItem
          key={producto.id}
          product={producto}
          onDelete={() => onDelete(producto.id)}
          onEdit={() => onEdit(producto)}
        />
      ))}
    </div>
  );
};

export default ProductList;
