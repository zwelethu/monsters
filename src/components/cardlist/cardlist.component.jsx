import React from 'react';
import './cardlist.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(p => (
        <Card key={p.id} monster={p} />
      ))}
    </div>
  );
};
