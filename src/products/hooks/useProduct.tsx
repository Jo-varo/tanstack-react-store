import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const productQuery = useQuery({
    queryKey: ['product', id],
    queryFn: () => productActions.getProductById(id),
    staleTime: 60 * 60 * 1000,
  });

  return { productQuery };
};
