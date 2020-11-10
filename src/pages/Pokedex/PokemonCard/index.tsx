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

interface CardColorsType {
  [n: string]: string;
}

const CardsColors: CardColorsType = {
  stile: '#a1a1a1',
  dark: '#a1a1a1',
  rock: '#a1a1a1',
  grass: '#70a83b',
  bug: '#70a83b',
  ice: '#a2cff0',
  water: '#a2cff0',
  fire: '#f76545',
  flying: '#f76545',
  dragon: '#f76545',
  normal: '#76aadb',
  gosth: '#76aadb',
  poison: '#a974bc',
  psychic: '#a974bc',
  fairy: '#a974bc',
  ghost: '#a974bc',
  ground: '#9b897b',
  electric: '#f7c545',
};

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
        <div className={s.labelWrap}>
          {pokemon.types.map((typesItem) => {
            return (
              <span key={pokemon.id} className={s.label} style={{ background: CardsColors[typesItem] }}>
                {typesItem}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
