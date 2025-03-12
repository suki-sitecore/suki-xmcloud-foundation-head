import React from 'react';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

type GlobalBannerComponentProps = ComponentRendering;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GlobalBannerComponent = (_props: GlobalBannerComponentProps): JSX.Element => {
  return (
    <div className="component container-fluid global-banner">
      <div className="component-content">
        <p>
          <span>Add your Beauty Loop card to your mobile wallet!</span>
          <span>
            <a href="#">Shop now</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export const Default = GlobalBannerComponent;
