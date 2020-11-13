import React from 'react';
import { navigate } from 'hookrouter';
import cn from 'classnames';
import Button from '../../components/Button';

import s from './NotFound.module.scss';
import { LinkEnum } from '../../routes';

const NotFound = () => {
  return (
    <div className={cn(s.rootNotFound, 'rootBlock')}>
      <Button
        color="primaryBtn"
        onClick={() => {
          navigate(LinkEnum.HOME);
        }}>
        Return
      </Button>
    </div>
  );
};

export default NotFound;
