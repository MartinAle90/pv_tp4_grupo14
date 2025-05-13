import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="product-list">
      {products.map(producto => (
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
