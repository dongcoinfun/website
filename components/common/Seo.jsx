import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `Dongcoin | Buy $DONG`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
