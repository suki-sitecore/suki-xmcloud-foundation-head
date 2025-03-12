import React, { useCallback } from 'react';
import {
  //NextImage as JssImage,
  //Link as JssLink,
  //RichText as JssRichText,
  //ImageField,
  Text as JssText,
  Field,
  // LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  WidgetDataType,
  useRecommendation,
  widget,
  RecommendationInitialState,
} from '@sitecore-search/react';
// import { WidgetComponentProps } from '@sitecore-discover/react/types';
import { Carousel } from '@sitecore-search/ui';

import { ProductModel } from 'src/models/ProductModel';
import { ProductCard } from '../ProductCard/ProductCard';

type InitialState = RecommendationInitialState<'itemsPerPage'>;

interface RecommendedProductsProps {
  title?: Field<string>;
}

const RecommendationSearchWidgetComponent = (props: RecommendedProductsProps): JSX.Element => {
  console.log('RecommendationSearchWidgetComponent props', props);

  const itemsToDisplay = 6;
  const { title } = props || {};
  const {
    widgetRef,
    actions: { onNavigationNext, onNavigationPrev, onItemClick },
    queryResult: { isLoading, isFetching, data: { content: products = [] } = {} },
  } = useRecommendation<ProductModel, InitialState>({
    state: {
      itemsPerPage: itemsToDisplay,
    },
  });

  const handleOnItemClick = useCallback(
    (_ev: React.MouseEvent<HTMLAnchorElement>, product: ProductModel, index: number) => {
      onItemClick({
        id: product.id,
        index: index,
        sourceId: product.source_id,
      });
    },
    [onItemClick]
  );

  console.log('RecommendationSearchWidgetComponent products', products);

  return (
    <div className="recommendation-search-widget">
      {!isLoading && !isFetching && products.length > 0 && (
        <>
          <JssText field={title} tag="h2" />
          <Carousel.Root
            onNavigationNext={onNavigationNext}
            onNavigationPrev={onNavigationPrev}
            ref={widgetRef}
            className="carousel recommendation-search-carousel"
          >
            <Carousel.Slides className="carousel-slides">
              {products.map((product: ProductModel, index: number) => (
                <Carousel.Slide key={product.id} className="carousel-slide">
                  <ProductCard
                    product={product}
                    handleOnItemClick={(ev, product) => handleOnItemClick(ev, product, index)}
                  />
                </Carousel.Slide>
              ))}
            </Carousel.Slides>

            <Carousel.Previous
              aria-label="Show previous demo"
              tabIndex={-1}
              className="carousel-prev"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Previous"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.12 7 8 1.07 6.94 0 0 7l6.92 7 1.06-1.07L2.12 7Z"
                  fill="#000"
                />
              </svg>
            </Carousel.Previous>
            <Carousel.Next aria-label="Show next demo" tabIndex={-1} className="carousel-next">
              {/* <ChevronRightIcon className="RecommendationCarouselIcon" /> */}
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Next"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.88 7 .02 1.07 1.08 0 8 7l-6.94 7L0 12.93 5.88 7Z"
                  fill="#000"
                />
              </svg>
            </Carousel.Next>
          </Carousel.Root>
        </>
      )}
    </div>
  );
};

export const RecommendationSearchWidget = widget(
  RecommendationSearchWidgetComponent,
  WidgetDataType.RECOMMENDATION,
  'product'
);
