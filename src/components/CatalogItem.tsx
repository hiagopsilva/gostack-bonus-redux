import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IState } from '../store';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  product,
}: CatalogItemProps) => {
  const dispath = useDispatch();

  const hashFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failureStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispath(addProductToCartRequest(product));
  }, [dispath, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      {' - '}
      <span>{product.price}</span>

      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>

      {hashFailedStockCheck && (
        <span style={{ color: 'red' }}>Falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
