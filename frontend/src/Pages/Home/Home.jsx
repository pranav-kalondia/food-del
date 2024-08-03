import React, { useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Exploremenu from '../../Components/Exploremenu/Exploremenu';
import Fooddisplay from '../../Components/fooddisplay/Fooddisplay';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category}/>
      

    </div>
  );
};

export default Home;
