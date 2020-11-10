import React from 'react';
import Heading from '../../../components/Heading';

import s from './PokemonCard.module.scss';

interface PokemonProps {
  pokemon: {
    abilities: string[];
    baseExperience: number;
    height: number;
    id: number;
    img: string;
    isDefault: boolean;
    name: string;
    nameClean: string;
    order: number;
    stats: {
      attack: number;
      defense: number;
      hp: number;
      'special-attack': number;
      'special-defense': number;
      speed: number;
    };
    types: string[];
    weight: number;
  };
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level="5" className={s.titleName}>
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        {pokemon.types.map((typesItem) => {
          return (
            <div className={s.labelWrap}>
              <span className={s.label}>{typesItem}</span>
            </div>
          );
        })}
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
