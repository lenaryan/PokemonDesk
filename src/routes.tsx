import React from 'react';
import EmptyPage from './pages/EmptyPage';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
