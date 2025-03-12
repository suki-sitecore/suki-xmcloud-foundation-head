import React from 'react';
import {
  //NextImage as JssImage,
  //Link as JssLink,
  //RichText as JssRichText,
  //ImageField,
  //Text as JssText,
  Field,
  // LinkField,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { RecommendationSearchWidget } from 'src/atoms/SearchWidgets/RecommendationSearchWidget';

interface RecommendedProductsComponentFields {
  rfkId: Field<string>;
  title?: Field<string>;
}

type RecommendedProductsComponentProps = ComponentRendering<RecommendedProductsComponentFields>;

const RecommendedProductsComponent = (props: RecommendedProductsComponentProps): JSX.Element => {
  console.log('RecommendedProductsComponent props', props);

  const { title, rfkId } = props.fields || {};

  return <RecommendationSearchWidget rfkId={rfkId?.value || ''} title={title} />;
};

export const Default = RecommendedProductsComponent;
