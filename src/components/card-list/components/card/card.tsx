import * as React from 'react';
import './card.scss';

const Card: React.FunctionComponent <{ monster: { id: Number, email: String, name: String } }> = props => {
  return (
    <div className='card-container'>
      <img alt="" height="180" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} width="180" />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email.toLowerCase()}</p>
    </div>
  );
};
export default Card;