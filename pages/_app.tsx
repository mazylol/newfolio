import '../styles/globals.css';
import Nav from '../components/Nav';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-gray-700 min-h-screen">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
