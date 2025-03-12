import React from 'react';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

type FooterComponentProps = ComponentRendering;

/**
 * A quick Header mockup
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FooterComponent = (_props: FooterComponentProps): JSX.Element => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="footer--brand-bar"></div>
    </footer>
  );
};

export const Default = FooterComponent;
