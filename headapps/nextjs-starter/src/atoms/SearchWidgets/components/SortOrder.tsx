import React from 'react';
import type { SearchResponseSortChoice } from '@sitecore-search/react';
import { useSearchResultsActions } from '@sitecore-search/react';
import { SortSelect } from '@sitecore-search/ui';

export type SortOrderProps = {
  options: Array<SearchResponseSortChoice>;
  selected: string;
};

export const SearchSortOrder = ({ options, selected }: SortOrderProps) => {
  const selectedSortIndex = options.findIndex((s) => s.name === selected);
  const { onSortChange } = useSearchResultsActions();
  return (
    <SortSelect.Root defaultValue={options[selectedSortIndex]?.name} onValueChange={onSortChange}>
      <SortSelect.Trigger className="search-sort-order--trigger">
        <SortSelect.SelectValue>{options[selectedSortIndex].label}</SortSelect.SelectValue>
        <span className="search-sort-order--trigger-icon">
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="m14.29.65 1.04.96L8 8.35.67 1.6 1.7.65 8 6.42 14.29.65Z" fill="#000" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.71 1.05 8 6.82l6.29-5.77.61.56L8 7.95 1.1 1.61l.61-.56Z"
              fill="#000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.29 1.27 8 7.04 1.71 1.27l-.37.34L8 7.73l6.66-6.12-.37-.34Z"
              fill="#000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 1.61 8 8.5.5 1.61 1.71.5 8 6.27 14.29.5l1.21 1.11Zm-1.21-.8L8 6.58 1.71.8l-.88.8L8 8.2l7.17-6.58-.88-.8Zm.78.8L8 8.11.93 1.6 1.71.9 8 6.66 14.29.9l.78.72Zm-.78-.19L8 7.2 1.71 1.42l-.2.2L8 7.57l6.5-5.97-.21-.19Z"
              fill="#000"
            />
          </svg>
        </span>
      </SortSelect.Trigger>

      <SortSelect.Content className="search-sort-order--content">
        <SortSelect.Viewport className="search-sort-order--content-options">
          {options.map((option) => (
            <SortSelect.Option
              value={option}
              key={option.name}
              className="search-sort-order--content-option"
            >
              <SortSelect.OptionText>{option.label}</SortSelect.OptionText>
            </SortSelect.Option>
          ))}
        </SortSelect.Viewport>
      </SortSelect.Content>
    </SortSelect.Root>
  );
};
