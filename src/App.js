import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './conponents/Navbar.js';
import AuthorCard from "./conponents/main.js";
import OrangeCard from './conponents/OrangeCard';
import LonestarCard from './conponents/LonestarCard';

function App() {
  const [isActive, setISActive] = useState({
    active: true,
    name: 'orange'
  });
  return (
    <>
      <Navbar />
      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <AuthorCard {...{ isActive, setISActive }} />
            {
              isActive.name === "orange" ?
                <OrangeCard/> : isActive.name === "lonestar" ? <LonestarCard/> : <OrangeCard/>
            }

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
