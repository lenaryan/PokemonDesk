import React, { useState } from 'react';
import cn from 'classnames';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard, { PokemonProps } from './PokemonCard';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  return (
    <div className={cn(s.pokedexPage, 'rootBlock')}>
      <Layout>
        <Heading level="3" className={s.pokedexTitle}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input
          className={s.search}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Encuentra tu pokémon..."
        />

        {isError && <div>Something&apos;s Wrong!</div>}

        {isLoading && <div>Loading...</div>}

        {!isLoading && (
          <div className={s.pokemonsWrap}>
            {data.pokemons.map((item: PokemonProps) => (
              <PokemonCard key={item.id} pokemon={item} />
            ))}
          </div>
        )}
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
