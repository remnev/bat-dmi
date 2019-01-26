import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import './layout.styl';

const Layout = (props) => (
  <div className="layout">
    <Head>
      <meta charSet='utf-8' />
      <title>Батутный центр COSMICA в Дмитрове – прыжки на батуте для детей и взрослых</title>
      <meta name="description" content="Батутный центр COSMICA в Дмитрове приглашает детей и взрослых на увлекательные тренировки. У нас отличные цены на прыжки. Скалодром. Веревочный городок." />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout
