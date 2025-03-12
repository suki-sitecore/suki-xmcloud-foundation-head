import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
// import {
//   NextImage as JssImage,
//   Link as JssLink,
//   RichText as JssRichText,
//   ImageField,
//   Text as JssText,
//   Field,
//   LinkField,
//   ComponentRendering,
// } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  WidgetDataType,
  useSearchResults,
  widget,
  SearchResultsInitialState,
} from '@sitecore-search/react';

// import { WidgetComponentProps } from '@sitecore-discover/react/types';
//import { Carousel } from '@sitecore-search/ui';

import { ProductModel } from 'src/models/ProductModel';
import { SearchPagination } from './components/Pagination';
import { SearchSortOrder } from './components/SortOrder';
import { ProductCard } from 'src/atoms/ProductCard/ProductCard';

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'page' | 'sortType' | 'keyphrase'>;

// interface FullPageSearchProps {
//   uid: string;
//   title?: Field<string>;
// }

const FullPageSearchWidgetComponent = (/*props: FullPageSearchProps*/): JSX.Element => {
  // console.log('FullPageSearchWidgetComponent props', props);
  // console.log('test);

  const router = useRouter();

  const defaultSortType = 'title_descending';
  const defaultPage = 1;
  const defaultItemsPerPage = 8;

  const {
    widgetRef,
    actions: { onItemClick, onKeyphraseChange },
    state: { sortType, page, itemsPerPage, keyphrase: apiKeyphrase },
    queryResult: {
      // isLoading,
      // isFetching,
      data: {
        total_item: totalItems = 0,
        sort: { choices: sortChoices = [] } = {},
        content: products = [],
        // facet: facets = [],
      } = {},
    },
    query,
  } = useSearchResults<ProductModel, InitialState>({
    query: (query) => {
      query.getRequest();
    },
    state: {
      sortType: defaultSortType,
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: router.query.searchTerm as string,
    },
  });

  // console.log('FullPageSearchWidgetComponent isLoading', isLoading);
  // console.log('FullPageSearchWidgetComponent isFetching', isFetching);
  // console.log('FullPageSearchWidgetComponent facets', facets);
  // console.log('FullPageSearchWidgetComponent sortChoices', sortChoices);
  // console.log('FullPageSearchWidgetComponent totalItems', totalItems);
  // console.log('FullPageSearchWidgetComponent products count', products.length);
  // console.log('FullPageSearchWidgetComponent products', products);
  // console.log('FullPageSearchWidgetComponent query', query);
  console.log('FullPageSearchWidgetComponent apiKeyphrase', apiKeyphrase);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const totalShown = Math.max(0, Math.min(totalItems, page * itemsPerPage));

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

  useEffect(() => {
    // Search query exists only on global search page
    const searchQuery = router.query.searchTerm as string;
    if (searchQuery) {
      query.getRequest();
      onKeyphraseChange({ keyphrase: searchQuery });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className="fullpage-search-widget" ref={widgetRef}>
      <h2 className="fullpage-search-widget--title">{`Here is what we found for "${apiKeyphrase}"`}</h2>

      <p className="fullpage-search-widget--total">{`${totalItems}`} results</p>

      <div className="fullpage-search-widget--layout">
        <div className="fullpage-search-widget--layout-sidebar">
          <p className="fullpage-search-widget--total">{`${totalItems}`} results</p>
        </div>

        <div className="fullpage-search-widget--layout-main">
          <div className="fullpage-search-widget--toolbar">
            {sortChoices.length > 0 && (
              <>
                <div className="fullpage-search-widget--sort">
                  <span className="fullpage-search-widget--sort-label">Sort by</span>
                  <span className="fullpage-search-widget--sort-control">
                    <SearchSortOrder options={sortChoices} selected={sortType} />
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="fullpage-search-widget--results">
            {products.map((product, index) => {
              return (
                <div className="fullpage-search-widget--result-item" key={product.id}>
                  <ProductCard
                    product={product}
                    handleOnItemClick={(ev, product) => handleOnItemClick(ev, product, index)}
                  />
                </div>
              );
            })}
          </div>

          <div className="fullpage-search-widget--footer">
            <div className="fullpage-search-widget--summary">{`Showing ${totalShown} of ${totalItems}`}</div>
            <SearchPagination currentPage={page} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FullPageSearchWidget = widget(
  FullPageSearchWidgetComponent,
  WidgetDataType.SEARCH_RESULTS,
  'product'
);
