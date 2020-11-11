import React from 'react';
import { navigate } from 'hookrouter';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import Header from '../../components/Header';

import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading level="1">
            <b>Find</b> all your favourite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={() => {
              navigate('/pokedex');
            }}>
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
