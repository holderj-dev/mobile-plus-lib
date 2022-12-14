import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './conponents/Navbar.js';
import AuthorCard from "./conponents/main.js";
import OrangeCard from './conponents/OrangeCard';
import LonestarCard from './conponents/LonestarCard';
import AboutMp from './routes/About';

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
                <OrangeCard /> : isActive.name === "lonestar" ? <LonestarCard /> : <OrangeCard />
            }

          </div>
        </main>
      </div>

      <footer class="bg-[#edede9] rounded-md shadow justify-center">
        <AboutMp />
        {/* <p
          class='flex
                      justify-items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-orange-500
                      hover:border-gray-300 hover:text-yellow-500'>
          Mobile Plus Liberia. Is a thirdparty app, developed by  <a href="https://jamesesilholder.vercel.app">   James Esil Holder</a>
          for assibility ot both Gsm services and Ussds Codes in liberia.
        </p> */}
      </footer>
    </>
  );
}

export default App;
