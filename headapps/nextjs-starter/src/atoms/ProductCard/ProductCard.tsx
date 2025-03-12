import React from 'react';

import { ProductModel } from 'src/models/ProductModel';
import { RatingStars } from '../RatingStars/RatingStars';

interface ProductCardProps {
  product: ProductModel;
  handleOnItemClick: (ev: React.MouseEvent<HTMLAnchorElement>, product: ProductModel) => void;
}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { product, handleOnItemClick } = props;

  return (
    <div className="card-product">
      <div className="card-media">
        <picture>
          <img src={product.image_url} alt={product.name} width={375} height={498} />
        </picture>
      </div>
      <div className="card-content">
        <div className="card-content-top">
          <p className="card-title-before">{product.memocategory}</p>
          <h3 className="card-title">
            <a href={product.url} onClick={(ev) => handleOnItemClick(ev, product)}>
              {product.name}
            </a>
          </h3>
        </div>
        <div className="card-content-bottom">
          <p className="card-price">$99.00</p>
          <div className="card-rating">
            <RatingStars value={4} />
            <span className="rating-count">(999)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
