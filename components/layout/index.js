import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import Metrica from '../metrica';
import './layout.styl';

const Layout = ({children, title, description}) => (
  <div className="layout">
    <Head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Metrica />
      <meta name="yandex-verification" content="d60589235e9a4931" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
