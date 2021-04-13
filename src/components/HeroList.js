import React from 'react';
import { connect } from 'react-redux';

const HeroList = props => {
  const { heroes, isFetching, error } = props;
  return (
    <section>
      <h1>Hero List</h1>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error)}
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>{JSON.stringify(hero, null, 8)}</li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ hero }) => hero;

export default connect(mapStateToProps)(HeroList);
