import React from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

const Pokedex = () => {
  return (
    <>
      <Layout>
        <Heading level="1">Pokedex H1</Heading>
        <Heading level="2">Pokedex H2</Heading>
      </Layout>
      <Footer />
    </>
  );
};

export default Pokedex;
