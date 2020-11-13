import React from 'react';
import { navigate } from 'hookrouter';
import cn from 'classnames';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import TeamRocket from '../../images/team_rocket.png';

import s from './NotFound.module.scss';
import { LinkEnum } from '../../routes';

const NotFound = () => {
  return (
    <div className={cn(s.rootNotFound, 'rootBlock')}>
      <span className={s.text404}>404</span>
      <div className={s.content404}>
        <img src={TeamRocket} alt="Team Rocket" role="presentation" className={s.image404} />
        <Heading level="1" className={s.heading404}>
          <span className={s.heading404White}>The rocket team</span>
          <span>has won this time.</span>
        </Heading>
        <Button
          color="primaryBtn"
          className={s.button404}
          onClick={() => {
            navigate(LinkEnum.HOME);
          }}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
