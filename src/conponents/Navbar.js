import React from "react";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <>
      <div className="bg-[#080808] rounded-md shadow ">
        <div className="flex items-stretch">
          <img src='https://halberdbastion.com/sites/default/files/styles/medium/public/2019-04/Orange-Liberia_logo.png?itok=MEhqibKc' width={30} height={30} alt="orange" />
          <img className="align-right" src='https://i0.wp.com/lr.careerical.com/wp-content/uploads/2022/10/Lonestar-Cell-MTN-192x192-1.jpg?resize=225%2C225&ssl=1
' width={30} height={30} alt="lonestar" />
        </div>
        <div className="font-bold flex justify-center">
          <h1 className="text-yellow-500  hover:text-orange-500">About Mobile Plus Liberia</h1>
        </div>
        <p
          class='flex justify-center
          border-b-2 border-transparent
          px-1
          pt-1
          text-sm
          font-bold
          text-orange-500
          hover:text-yellow-500'>
          <p>Shaping The Posibility And Avaibility Of Tech In Liberia.</p>

        </p>

      </div>
    </>
  );
}




// https://rishi.app/blog/how-to-build-your-own-likes-and-comments-system-with-firebase-and-react