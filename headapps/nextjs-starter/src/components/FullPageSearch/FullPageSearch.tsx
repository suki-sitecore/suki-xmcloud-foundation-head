import React from 'react';
import { ComponentRendering, ComponentParams, Field } from '@sitecore-jss/sitecore-jss-nextjs';

import { FullPageSearchWidget } from 'src/atoms/SearchWidgets/FullPageSearchWidget';

interface FullPageSearchComponentFields {
  rfkId: Field<string>;
}

interface FullPageSearchComponentProps {
  fields: FullPageSearchComponentFields;
  params?: ComponentParams;
  rendering?: ComponentRendering<FullPageSearchComponentFields>;
}

/**
 * A quick Header mockup
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FullPageSearchComponent = (props: FullPageSearchComponentProps): JSX.Element => {
  console.log('FullPageSearchComponent props', props);

  // const uid = props.params?.RenderingIdentifier || props.rendering?.uid || 'fullpage-search';
  const rfkId = props.fields?.rfkId?.value || '';

  return (
    <div className="component container-fluid preview-search">
      <div className="component-content">
        <FullPageSearchWidget rfkId={rfkId} />
      </div>
    </div>
  );
};

export const Default = FullPageSearchComponent;
