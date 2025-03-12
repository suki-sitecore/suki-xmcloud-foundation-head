import config from 'temp/config';
import React from 'react';
import { ComponentRendering, ComponentParams, Field } from '@sitecore-jss/sitecore-jss-nextjs';

import { PreviewSearchWidget } from 'src/atoms/SearchWidgets/PreviewSearchWidget';

interface PreviewSearchComponentFields {
  rfkId: Field<string>;
}

interface PreviewSearchComponentProps {
  fields: PreviewSearchComponentFields;
  params?: ComponentParams;
  rendering?: ComponentRendering<PreviewSearchComponentFields>;
}

/**
 * A quick Header mockup
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PreviewSearchComponent = (props: PreviewSearchComponentProps): JSX.Element => {
  console.log('PreviewSearchComponent props', props);

  const uid = props.params?.RenderingIdentifier || props.rendering?.uid || 'preview-search';
  const rfkId = props.fields?.rfkId?.value || 'rfkid_6';
  const searchPageUrl = `${config.publicUrl}/search`;

  return (
    <div className="component container-fluid preview-search">
      <div className="component-content">
        <PreviewSearchWidget rfkId={rfkId} uid={uid} searchPageUrl={searchPageUrl} />
      </div>
    </div>
  );
};

export const Default = PreviewSearchComponent;
