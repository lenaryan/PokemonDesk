import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard, { PokemonProps } from './PokemonCard';
import s from './Pokedex.module.scss';
import config from '../../config';

interface IUsePokemons {
  data: {
    total: number;
    pokemons: PokemonProps[];
  };
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something&apos;s Wrong!</div>;
  }

  return (
    <div className={cn(s.pokedexPage, 'rootBlock')}>
      <Layout>
        <Heading level="3" className={s.pokedexTitle}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonsWrap}>
          {data.pokemons.map((item: PokemonProps) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
