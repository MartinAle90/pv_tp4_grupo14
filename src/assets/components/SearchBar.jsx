import { useMemo, useState } from "react";

function SearchBar({ productos }) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const lowerQuery = query.toLowerCase();

    return productos.filter((producto) => {
      const nombre = producto.nombre?.toLowerCase() || "";
      const marca = producto.marca?.toLowerCase() || "";
      const id = producto.id?.toString() || "";
      return nombre.includes(lowerQuery) || marca.includes(lowerQuery) || id.includes(lowerQuery);
    });
  }, [productos, query]);

  return (
    <>
      <h2>Buscar productos</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por nombre o marca"
      />

      <ul>
        {filteredProducts.map((p, i) => (
          <li key={p.id}>
            <strong>{p.id}</strong> - <strong>{p.nombre}</strong> - {p.marca} - ${p.precioUnitario} -{" "}
            {p.descuento}% descuento - Precio con descuento: $
            {p.precioConDescuento.toFixed(2)} - Stock: {p.stock} -{" "}
            {p.estado ? "Activo" : "Inactivo"}
          </li>
        ))}

        {filteredProducts.length === 0 && (
          <li>No se encontraron resultados.</li>
        )}
      </ul>
    </>
  );
}

export default SearchBar;
