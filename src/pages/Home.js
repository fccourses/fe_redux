import React from 'react';
import HeroForm from '../components/HeroForm';
import HeroList from '../components/HeroList';

const Home = props => {
  return (
    <div>
      <HeroForm />
      <HeroList />
    </div>
  );
};

export default Home;
