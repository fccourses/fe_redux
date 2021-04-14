import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as HeroActionCreators from '../actions/heroCreators';

const HeroList = props => {
  const { heroes, isFetching, error, getHeroesRequst } = props;

  const loadMore = () => getHeroesRequst({ offset: heroes.length });

  useEffect(() => {
    loadMore();
  }, []);

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
      <button onClick={loadMore}>Load more Heroes!</button>
    </section>
  );
};

const mapStateToProps = ({ hero }) => hero;
const mapDispatchToProps = dispatch => ({
  getHeroesRequst: ({ limit, offset } = {}) =>
    dispatch(HeroActionCreators.getHeroRequest({ offset, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
