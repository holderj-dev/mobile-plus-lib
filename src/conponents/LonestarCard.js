import React from "react";

export default function LonestarCard() {
  return (
    <>
      <div id="lonestar" class="bg-[#FCE100] border-[#000000] h-50 my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="font-bold">Lonestar Cell MTN</h3>
        </div>


        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">My MTN Liberia</summary>
          <p>My Orange Liberia. Is a web app that allow you to access both Mobile Money and to buy internet and Voice packages without diaing a single code, COMING SOON!! </p>
          {/* <a class="font-bold text-2xl text-green-800" href=''>Watch Here Facebook</a> */}
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Lonestar Cell MTN Ussd Codes </summary>
          <p>Access all lonestar Cell MTN Ussd Codes and their ussage. </p>
          {/* <a class="font-bold text-2xl text-green-800" href='https://www.facebook.com/Jaye6000'>Watch Here Facebook</a> */}
        </details>
      </div>

    </>

  );
}