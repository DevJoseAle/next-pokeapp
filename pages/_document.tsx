
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import { CssBaseline } from '@nextui-org/react';
import React from 'react';

const MyDocument = () => {

  return (

    <Html lang="en">
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

  );

};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {

  const initialProps = await Document.getInitialProps(ctx);

  return {

    ...initialProps,
    styles: React.Children.toArray([initialProps.styles]),

  };

};

export default MyDocument