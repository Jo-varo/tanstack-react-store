import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface Options {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  const productsQuery = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => productActions.getProducts({ filterKey }),
    staleTime: 60 * 60 * 1000,
  });

  return { productsQuery };
};
