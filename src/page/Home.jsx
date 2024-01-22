import { Fauteres } from 'components/Features/Fauteres';
import { HomeComp } from 'components/Home/Home';
import { Video } from 'components/Video/Video';
import React from 'react';

const Home = () => {
  return (
    <>
      <HomeComp />
      <Fauteres />
      <Video />
    </>
  );
};
export default Home;
