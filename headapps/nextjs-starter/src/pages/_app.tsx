import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import { SitecoreSearchWidgetsProvider } from 'src/services/SitecoreSearchSDKService';
import Bootstrap from 'src/Bootstrap';

import 'assets/mecca.scss';

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    <>
      <Bootstrap {...pageProps} />
      {/*
        // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
        // Note Next.js does not (currently) provide anything for translation, only i18n routing.
        // If your app is not multilingual, next-localization and references to it can be removed.
      */}
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        <SitecoreSearchWidgetsProvider>
          <Component {...rest} />
        </SitecoreSearchWidgetsProvider>
      </I18nProvider>
    </>
  );
}

export default App;
