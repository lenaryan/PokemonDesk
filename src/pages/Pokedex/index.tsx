import React from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

// import { Colors, Sizes } from '../../components/Button'

const Pokedex = () => {
  return (
    <>
      <Layout>
        <Heading level="1">Pokedex H1</Heading>
        <Heading level="2">Pokedex H2</Heading>
        <Heading level="3">Pokedex H3</Heading>
        <Heading level="4">Pokedex H4</Heading>
        <Heading level="5">Pokedex H5</Heading>
        <Heading level="6">Pokedex H6</Heading>
        <Button fullWidth onClick={() => {}}>
          Button Full Width
        </Button>
        <Button size="small" onClick={() => {}}>
          Button Small
        </Button>
        <Button color="primary" onClick={() => {}}>
          Button Primary
        </Button>
        <Button color="primary" size="small" onClick={() => {}}>
          Button Primary Small
        </Button>
        <Button color="primary" fullWidth onClick={() => {}}>
          Button Primary Full Width
        </Button>
      </Layout>
      <Footer />
    </>
  );
};

export default Pokedex;
