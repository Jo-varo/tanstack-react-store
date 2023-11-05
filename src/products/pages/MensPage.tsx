import { ProductList, useProducts } from '..';

export const MensPage = () => {
  const { productsQuery } = useProducts({ filterKey: "men's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {productsQuery.isLoading && <p>Cargando...</p>}

      <ProductList products={productsQuery.data || []} />
    </div>
  );
};
