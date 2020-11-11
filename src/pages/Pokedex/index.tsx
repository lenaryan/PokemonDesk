import React from 'react';
import cn from 'classnames';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import PokemonCard from './PokemonCard';
import pokemons from './pokemonData';
import s from './Pokedex.module.scss';

const Pokedex = () => {
  return (
    <div className={cn(s.pokedexPage, 'rootBlock')}>
      <Header />
      <Layout>
        <Heading level="3" className={s.pokedexTitle}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonsWrap}>
          {pokemons.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
