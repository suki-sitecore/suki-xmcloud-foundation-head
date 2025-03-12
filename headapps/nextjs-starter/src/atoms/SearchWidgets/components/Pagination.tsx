import React from 'react';
import { useSearchResultsActions } from '@sitecore-search/react';
import { Pagination } from '@sitecore-search/ui';

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
}

export const SearchPagination = ({
  currentPage,
  totalPages,
}: SearchPaginationProps): JSX.Element => {
  const { onPageNumberChange } = useSearchResultsActions();

  return (
    <Pagination.Root
      currentPage={currentPage}
      defaultCurrentPage={1}
      totalPages={totalPages}
      onPageChange={(v) => {
        onPageNumberChange({ page: v });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="search-pagination"
    >
      <Pagination.PrevPage onClick={(e) => e.preventDefault()} className="search-pagination--prev">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.12006 7.00125L8 1.07293L6.94245 0L0 6.99958L6.92165 14L7.98085 12.9287L2.12006 7.00125Z"
            fill="black"
          ></path>
        </svg>
      </Pagination.PrevPage>

      <Pagination.Pages className="search-pagination--pages">
        {(pagination) =>
          Pagination.paginationLayout(pagination, {
            boundaryCount: 1,
            siblingCount: 1,
          }).map(({ page, type }) =>
            type === 'page' ? (
              <Pagination.Page
                key={page}
                aria-label={`Page ${page}`}
                page={page as number}
                onClick={(e) => e.preventDefault()}
                className="search-pagination--page"
              >
                {page}
              </Pagination.Page>
            ) : (
              <span key={type}>...</span>
            )
          )
        }
      </Pagination.Pages>

      <Pagination.NextPage onClick={(e) => e.preventDefault()} className="search-pagination--next">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.87994 6.99875L0.0191458 1.07126L1.07835 0L8 7.00042L1.05755 14L0 12.9271L5.87994 6.99875Z"
            fill="black"
          ></path>
        </svg>
      </Pagination.NextPage>
    </Pagination.Root>
  );
};
