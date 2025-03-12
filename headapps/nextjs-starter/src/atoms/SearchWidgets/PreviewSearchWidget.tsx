import React, { useState, useEffect, useCallback, useRef } from 'react';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import {
  //NextImage as JssImage,
  //Link as JssLink,
  //RichText as JssRichText,
  //ImageField,
  //Text as JssText,
  Field,
  // LinkField,
  //ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  WidgetDataType,
  usePreviewSearch,
  PreviewSearchInitialState,
  SearchResponseSuggestion,
  widget,
} from '@sitecore-search/react';
// import { WidgetComponentProps } from '@sitecore-discover/react/types';
// import { Carousel } from '@sitecore-search/ui';

import { ProductModel } from 'src/models/ProductModel';
import { ProductCard } from '../ProductCard/ProductCard';

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList' | 'keyphrase'>;

interface PreviewSearchProps {
  uid: string;
  searchPageUrl: string;
  title?: Field<string>;
}

const PreviewSearchWidgetComponent = (props: PreviewSearchProps): JSX.Element => {
  //console.log('PreviewSearchWidgetComponent props', props);
  const { searchPageUrl } = props;

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [showingPreview, setShowingPreview] = useState<boolean>(false);
  const [showingProducts, setShowingProducts] = useState<ProductModel[]>([]);
  const [showingSuggestions, setShowingSuggestions] = useState<SearchResponseSuggestion[]>([]);

  const formSubmitUrl = useRef<string>('');
  const defaultItemsPerPage = 12;

  const {
    widgetRef,
    actions: { onItemClick, onKeyphraseChange },
    queryResult: {
      isFetching,
      isLoading,
      data: {
        content: products = [],
        suggestion: { product_suggestion: suggestions = [] } = {},
      } = {},
    },
    state: { keyphrase = '' },
  } = usePreviewSearch<ProductModel, InitialState>({
    state: {
      suggestionsList: [
        {
          suggestion: 'product_suggestion',
          max: 4,
        },
      ],
      itemsPerPage: defaultItemsPerPage,
      keyphrase: (router.query?.searchTerm as string) || '',
    },
  });

  const getSearchTermUrl = useCallback((searchTerm: string) => {
    if (formSubmitUrl.current) {
      const url = new URL(formSubmitUrl.current);
      url.searchParams.set('searchTerm', searchTerm || '');

      return url.toString();
    }

    return '';
  }, []);

  const handleInputOnChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const target = ev.target;
      const value = target.value || '';

      if (value !== keyphrase) {
        onKeyphraseChange({
          keyphrase: value,
        });
      }
    },
    [keyphrase, onKeyphraseChange]
  );

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

  const handleInputOnFocus = useCallback(() => {
    if (!showingPreview) {
      setShowingPreview(true);
    }
  }, [showingPreview]);

  const handleFormSubmit = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const searchUrl = getSearchTermUrl(inputRef.current?.value || '');

      router.push(searchUrl);
      setShowingPreview(false);

      window.setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      });
    },
    [getSearchTermUrl, router]
  );

  const handleClosePreviewSearchClick = useCallback(() => {
    if (showingPreview) {
      setShowingPreview(false);
    }
  }, [showingPreview]);

  console.log('PreviewSearchWidgetComponent isFetching', isFetching);
  console.log('PreviewSearchWidgetComponent isLoading', isLoading);
  console.log('PreviewSearchWidgetComponent products', products);
  console.log('PreviewSearchWidgetComponent suggestions', suggestions);

  useEffect(() => {
    if (showingPreview) {
      document.documentElement.classList.add('header-preview-search-active');
    } else {
      document.documentElement.classList.remove('header-preview-search-active');
    }
  }, [showingPreview]);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      setShowingProducts(products);
      setShowingSuggestions(suggestions);
    }
  }, [products, isLoading, isFetching, suggestions]);

  useEffect(() => {
    formSubmitUrl.current = formRef.current?.action || '';
  }, []);

  return (
    <div className={`preview-search-widget ${showingPreview ? '-active' : ''}`} ref={widgetRef}>
      <div className="preview-search-widget--form">
        <form ref={formRef} action={searchPageUrl || '/'} method="get" onSubmit={handleFormSubmit}>
          <div className="preview-search-widget--field">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search 150+ global beauty brands"
              defaultValue={keyphrase}
              onChange={handleInputOnChange}
              onFocus={handleInputOnFocus}
              maxLength={64}
            />
          </div>
          {showingPreview && (
            <button
              type="button"
              onClick={handleClosePreviewSearchClick}
              className="preview-search-widget--close"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Close search flyout"
              >
                <path
                  d="m10.73 1.54-.8-.79-4.2 4.2L1.55.74l-.79.8 4.2 4.19-4.2 4.2.8.8 4.19-4.2 4.2 4.2.8-.8-4.2-4.2 4.2-4.2Z"
                  fill="#000"
                />
              </svg>
            </button>
          )}
        </form>
      </div>
      {showingPreview && (
        <div className="preview-search-widget--content">
          <div
            className="preview-search-widget--content-backdrop"
            onClick={() => setShowingPreview(false)}
          ></div>
          <div className="preview-search-widget--content-inner">
            {!!(showingProducts.length || showingSuggestions.length) && (
              <>
                {keyphrase !== '' && (
                  <>
                    <div className="preview-search-widget--content-side">
                      <div className="preview-search-widget--content-keyphrase">
                        {/* {showingSuggestions.length > 0 && (
                          <NextLink href={getSearchTermUrl(showingSuggestions[0].text)}>
                            {showingSuggestions[0].text}
                          </NextLink>
                        )} */}

                        <NextLink
                          href={getSearchTermUrl(keyphrase)}
                          onClick={() => setShowingPreview(false)}
                        >
                          {keyphrase}
                        </NextLink>
                      </div>
                      {showingSuggestions.length > 0 && (
                        <div className="preview-search-widget--content-suggestions">
                          <div className="preview-search-widget--content-suggestions-title">
                            <h3>You might also interested in</h3>
                          </div>
                          <div className="preview-search-widget--content-suggestions-list">
                            <ul>
                              {showingSuggestions.map((suggestion) => {
                                return (
                                  <li key={suggestion.text}>
                                    <NextLink
                                      href={getSearchTermUrl(suggestion.text)}
                                      onClick={() => setShowingPreview(false)}
                                    >
                                      {suggestion.text}
                                    </NextLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                <div className="preview-search-widget--content-result">
                  <div className="preview-search-widget--content-items">
                    {showingProducts.map((product, index) => {
                      return (
                        <div className="preview-search-widget--content-item" key={product.id}>
                          <ProductCard
                            product={product}
                            handleOnItemClick={(ev, product) =>
                              handleOnItemClick(ev, product, index)
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const PreviewSearchWidget = widget(
  PreviewSearchWidgetComponent,
  WidgetDataType.PREVIEW_SEARCH,
  'product'
);
