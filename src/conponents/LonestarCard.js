import React from "react";

export default function LonestarCard() {
  return (
    <>
      <div id="lonestar" class="border-[#000000] h-50 my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="font-bold">Lonestar Cell MTN</h3>
        </div>


        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">My MTN Liberia</summary>
          <p>My Orange Liberia. Is a web app that allow you to access both Mobile Money and to buy internet and Voice packages without diaing a single code.</p>
          <p className="text-bold">COMMING SOON!!</p>
          {/* <a class="font-bold text-2xl text-green-800" href=''>Watch Here Facebook</a> */}
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Lonestar Cell MTN Ussd Codes </summary>
          <p>Access all lonestar Cell MTN Ussd Codes and their ussage. </p>
          {/* // codes 1- offers */}
          <details>
            <summary class="font-bold text-2xl text-gray-800">Lonester Offer Codes</summary>
            <div class="border border-[#000000] border-2
                  flex 
                  items-center
                  justify-center
                  sm:items-stretch sm:justify-start
                ">

              <div class="card-body center">
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full b">
                          <thead class="UsefulCodes-item">
                            <tr>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                No.
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                Code.
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                Description.
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                Cost.
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="UsefulCodes-item">
                              <td class="px-6 py-4  text-sm font-bold text-gray-900">1</td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <a href="tel:*124%23" class=" Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*124#">*124#</a>
                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <dd class="UsefulCodes-itemTitle">Check balance</dd>
                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">

                              </td>
                            </tr>
                            
                            <tr class=" UsefulCodes-item">
                              <td class="px-6 py-4  text-sm font-bold text-gray-900">2</td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <a href="tel:*143%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*143#">*143#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <dd class="UsefulCodes-itemTitle">3 days calls</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                only $1 Dollar
                              </td>
                            </tr>
                            <tr class=" UsefulCodes-item">
                              <td class="px-6 py-4  text-sm font-bold text-gray-900">3</td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <a href="tel:*888%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*888#">*888#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <dd class="UsefulCodes-itemTitle">Prestiage</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                $2 dollar and above.
                              </td>
                            </tr>
                                                       
                            <tr class=" UsefulCodes-item">
                              <td class="px-6 py-4  text-sm font-bold text-gray-900">4</td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <a href="tel:*121%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*121#">*121#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <dd class="UsefulCodes-itemTitle">SOS Credit</dd>

                              </td>
                            </tr>

                            <tr class=" UsefulCodes-item">
                              <td class="px-6 py-4  text-sm font-bold text-gray-900">5</td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <a href="tel:*352%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*352#">*352#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <dd class="UsefulCodes-itemTitle">Edge</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                  $2 dollars and Above.
                              </td>
                            </tr>
                            <tr class=" UsefulCodes-item">
                              <td class="px-6 py-4  text-sm font-bold text-gray-900">6</td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <a href="tel:*500%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*500#">*500#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                <dd class="UsefulCodes-itemTitle">Just For You.</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-bold px-6 py-4 ">
                                $1 dollar and above 

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          {/* <a class="font-bold text-2xl text-green-800" href='https://www.facebook.com/Jaye6000'>Watch Here Facebook</a> */}
        </details>
      </div>

    </>

  );
}