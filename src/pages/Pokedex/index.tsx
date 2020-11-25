import React, { useState } from 'react';
import cn from 'classnames';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from './PokemonCard';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [typesValue, setTypesValue] = useState<string[]>([]);
  const [query, setQuery] = useState<IQuery>({});

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [searchValue, typesValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const handleTypeChoose = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const typesArr: string[] = [];

    // getting all selected options from types select
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        typesArr.push(options[i].value);
      }
    }

    setTypesValue(typesArr);

    setQuery((s) => ({
      ...s,
      types: typesArr,
    }));
  };

  return (
    <div className={cn(s.pokedexPage, 'rootBlock')}>
      <Layout>
        <Heading level="3" className={s.pokedexTitle}>
          {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input
          className={s.search}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Encuentra tu pokémon..."
        />

        <div className="filters">
          <select name="" id="" onChange={handleTypeChoose} multiple>
            <option value="grass">Grass</option>
            <option value="water">Water</option>
            <option value="fire">Fire</option>
            <option value="poison">Poison</option>
          </select>
        </div>

        {isError && <div>Something&apos;s Wrong!</div>}

        {isLoading && <div>Loading...</div>}

        {!isLoading && (
          <div className={s.pokemonsWrap}>
            {data && data.pokemons.map((item: PokemonsRequest) => <PokemonCard key={item.id} pokemon={item} />)}
          </div>
        )}
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
