import React from 'react';
import { ComponentRendering, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

import { HeaderTop } from 'src/atoms/Header/HeaderTop';
import { PreviewSearchComponent } from 'components/PreviewSearch/PreviewSearch';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderComponentFields {}

interface HeaderComponentProps {
  fields: HeaderComponentFields;
  params?: ComponentParams;
  rendering?: ComponentRendering<HeaderComponentFields>;
}

/**
 * A quick Header mockup
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {
  console.log('HeaderComponent props', props);
  return (
    <div className="header">
      <div className="container">
        <HeaderTop />
        <div className="header-search">
          <PreviewSearchComponent {...{ fields: { rfkId: { value: 'rfkid_6' } } }} />
        </div>
        <div className="header-nav">nav</div>
      </div>
    </div>
  );
};

export const Default = HeaderComponent;
