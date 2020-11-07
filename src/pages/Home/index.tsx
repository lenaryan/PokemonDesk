import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favourite <b>Pokemon</b>
          </h1>
        </div>
        <div className={s.contentParallax}>Parallax div</div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
