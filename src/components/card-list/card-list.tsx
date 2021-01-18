import * as React from 'react';
import { Card } from './components';
import './card-list.scss';

interface Props {
  monsters: { id: number, email: string, name: string }[]
}

const CardList: React.FunctionComponent <Props> = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default CardList;