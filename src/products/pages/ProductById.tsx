import { useParams } from 'react-router-dom';
import { ProductCard, useProduct } from '..';
import { useEffect } from 'react';

export const ProductById = () => {
  const { id } = useParams();

  const { productQuery } = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

      {productQuery.isLoading && <p>Cargando...</p>}

      {productQuery.data && (
        <ProductCard product={productQuery.data} fullDescription />
      )}
    </div>
  );
};
