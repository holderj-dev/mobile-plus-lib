import React, { useState } from "react";

export default function mainCard({ isActive, setISActive }) {

  function handleActive(e) {
    e.preventDefault();

    setISActive({
      active: true,
      name: e.target.id
    });
  }


  return (
    <>
      {/* <!-- Work --> */}
      <div id="intro" class="bg-[#
            cad2c5] h-auto my-6 py-8 rounded-lg">

        <div id="content" class="prose lg:prose-xl px-2">
          <div id="hero-nav" className="p-6 w-full mx-auto">

            <ul className="flex items-center justify-center mx-4 gap-4">
              <li className=" border p-2 rounded-lg border-[#000000] ">
                <img src='https://halberdbastion.com/sites/default/files/styles/medium/public/2019-04/Orange-Liberia_logo.png?itok=MEhqibKc' width={30} height={30} alt="orange" />
                <a href="#orange" id="orange" onClick={handleActive} className={`${isActive.active && isActive.name === "orange" && 'font-bold'} font-lato text-xl`}>Orange TM</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#000000] ">
                <img src='https://i0.wp.com/lr.careerical.com/wp-content/uploads/2022/10/Lonestar-Cell-MTN-192x192-1.jpg?resize=225%2C225&ssl=1
' width={30} height={30} alt="orange" />
                <a href="#lonestar" id="lonestar" onClick={handleActive} className={`${isActive.active && isActive.name === "lonestar" && 'font-bold'}  font-lato text-xl`}>Lonestar Cell MTN</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}