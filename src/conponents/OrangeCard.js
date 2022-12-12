import React from "react";

export default function OrangeCard(){
    return(
        <>
         <div id="orange" class="bg-[#FC5C00] h-50 my-6 py-8 rounded-lg border-[#000000] border-4">
                  <div class="flex justify-center">
                <h3 class="font-bold">Orange TM</h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Orange Money Web</summary>
                <p>My Orange Money Web. Is a web based app that allow you to carring on faster orange money transaction, as you would when when using ussd codes.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">My Orange LIB</summary>
                <p>My Orange Liberia. Is a web app that allow you to access both internet and Voice packages with out diaing a single code. </p>
                <a href="https://orange.myorange.com.lr" className="font-bold font-gray-700"> Go To My Orange Liberia Here!!</a>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800"> My Orange Ussd Codes</summary>
                <p>Get free access to all Orange TM ussd Codes and their ussage.</p>
              </details>
         </div>
        </>

    );
}