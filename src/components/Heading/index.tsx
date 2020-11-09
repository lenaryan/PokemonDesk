import React from 'react';
import s from './Heading.module.scss';

interface HeadingProps {
  level: string;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  return React.createElement(`h${level}`, s, null, children);
};

export default Heading;
