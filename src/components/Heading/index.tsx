import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface HeadingProps {
  level: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level, className = null, children }) => {
  return React.createElement(`h${level}`, { className: cn(s, className) }, children);
};

export default Heading;
