import React from "react";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <nav class="bg-[#080808] rounded-md shadow">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
            <div class="relative flex h-16 justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center bg-[#52796f] sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button type="button" class="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    p-2
                    text-gray-400
                    hover:bg-gray-100 hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  " aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  {/* <!--
                Icon when menu is closed.
    
                Heroicon name: outline/bars-3
    
                  {/* <!--
                Icon when menu is open.
    
                Heroicon name: outline/x-mark
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
                </button>
              </div>
              <div class="
                  flex flex-1
                  items-center
                  justify-center
                  sm:items-stretch sm:justify-start
                ">
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                  <a href="/" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-orange-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Mobile Plus Liberia</a>

                  <a href="/my-orange" class="
                      items-center
                      inline-flex
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-yellow-500
                      hover:border-gray-300 hover:text-gray-500
                    ">My Orange</a>

                  <a href="/about" class="
                      items-center
                      inline-flex
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-yellow-500
                      hover:border-gray-300 hover:text-gray-500
                    ">About</a>

                </div>
              </div>

              {/* sign in class */}

            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}

          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 pt-2 pb-4">
              <a href="/" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-orange-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Mobile Plus Liberia</a>


              <a href="about" class="
                      items-center
                      inline-flex
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-yellow-500
                      hover:border-gray-300 hover:text-gray-500
                    ">About</a>

              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}

            </div>
          </div>
        </nav>

        {/* <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            
           
            <AuthorCard/>

            <WorkCard/>
            
            <EducationalCard/>
            
            <HobbiesCard/>
          
          </div>
       
        </main>
        </div> */}
      </div>
    </>
  );
}




// https://rishi.app/blog/how-to-build-your-own-likes-and-comments-system-with-firebase-and-react