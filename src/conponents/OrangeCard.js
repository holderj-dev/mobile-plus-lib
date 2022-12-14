import React from "react";

export default function OrangeCard() {
  return (
    <>
      <div id="orange" class="bg-[#FC5C00] h-50 my-6 py-8 rounded-lg border-[#000000] border-4">
        <div class="flex justify-center">
          <h3 class="font-bold">Orange TM</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Orange Money Web</summary>
          <p>My Orange Money Web. Is a web based app that allow you to carring on faster orange money transaction, as you would when when using ussd codes. COMING SOON!!</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">My Orange LIB</summary>
          <p>My Orange Liberia. Is a web app that allow you to access both internet and Voice packages with out diaing a single code. </p>
          <a href="https://www.myorange.orange.com.lr" className="font-bold font-gray-700"> GOTO MY ORANGE LIB HERE!!</a>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800"> My Orange Ussd Codes</summary>
          <p>Get free access to all Orange TM ussd Codes and their ussage.</p>
          <a href="/orange-ussds">View All Here!!</a>
          <details>

            {/* // codes 1- offers */}
            <summary class="font-bold text-2xl text-gray-800">Orange Offer Codes</summary>
            <div class="border 
                  flex 
                  items-center
                  justify-center
                  sm:items-stretch sm:justify-start
                ">

              <div class="card-body bg-[#FC5C00] center">
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full bg-[#FC5C00]">
                          <thead class="border-b">
                            <tr>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                No.
                              </th>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Code.
                              </th>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Description.
                              </th>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Cost.
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">1</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*124%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*124#">*124#</a>
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Check balance</dd>
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">2</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*150%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*150#">*150#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">1 Day calls</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                Only $50 Cent
                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">3</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*143%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*143#">*143#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">3 days calls</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                only $1 Dollar
                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">4</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*888%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*888#">*888#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">My Way</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">5</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*999%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*999#">*999#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Smart bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">6</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*998%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*998#">*998#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Post-paid smart bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">7</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*767%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*767#">*767#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">SOS Data</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">8</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*833%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*833#">*833#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Home Internet</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">9</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*909%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*909#">*909#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Internet Pro</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">10</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*250%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*250#">*250#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Voice international large bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">11</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*50%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*50#">*50#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">USA/Canada Petty bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">12</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="#" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*141#">*141#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">CAMEL Roaming (De)Activation</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">13</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel: *474%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*474#">*474#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Data packs</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">14</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*352%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*352#">*352#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">My Pack</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

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

          <details>
             {/* // codes 2-Orange money */}

             <summary class="font-bold text-2xl text-gray-800">Orange Money Codes</summary>
            <div class="border 
                  flex 
                  items-center
                  justify-center
                  sm:items-stretch sm:justify-start
                ">

              <div class="card-body bg-[#FC5C00] center">
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full bg-[#FC5C00]">
                          <thead class="border-b">
                            <tr>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                No.
                              </th>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Code.
                              </th>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Description.
                              </th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">1</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <a href="tel:*144%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*144#">*144#</a> 
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <span class="UsefulCodes-itemTitle">Orange Money</span> 
                              </td>
                            
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">2</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <a href="tel:*144*143*1%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*144*143*1#">*144*143*1#</a> 

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <span class="UsefulCodes-itemTitle">OM 3 days calls (USD)</span> 

                              </td>
                              
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">3</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <a href="tel:*144*30%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*144*30#">*144*30#</a> 

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <span class="UsefulCodes-itemTitle">OM 30LD daily voice pack</span> 

                              </td>

                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">4</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <a href="tel:*144*143*2%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*144*143*2#">*144*143*2#</a> 

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <span class="UsefulCodes-itemTitle">OM 3 days calls (LD)</span> 

                              </td>
                              
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">5</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <a href="tel:*144*10%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*144*10#">*144*10#</a> 

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                              <span class="UsefulCodes-itemTitle">OM 10LD daily voice pack</span> 

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">6</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*998%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*998#">*998#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Post-paid smart bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">7</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*767%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*767#">*767#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">SOS Data</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">8</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*833%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*833#">*833#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Home Internet</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">9</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*909%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*909#">*909#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Internet Pro</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">10</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*250%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*250#">*250#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Voice international large bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">11</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*50%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*50#">*50#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">USA/Canada Petty bundles</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">12</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="#" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*141#">*141#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">CAMEL Roaming (De)Activation</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">13</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel: *474%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*474#">*474#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">Data packs</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

                              </td>
                            </tr>
                            <tr class=" border-b">
                              <td class="px-6 py-4 bg-[#FC5C00] text-sm font-medium text-gray-900">14</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <a href="tel:*352%23" class="Link-reverse UsefulCodes-itemNumber etn-data-layer-event" data-dl_event_category="useful codes" data-dl_event_action="button_click" data-dl_event_label="*352#">*352#</a>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">
                                <dd class="UsefulCodes-itemTitle">My Pack</dd>

                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 bg-[#FC5C00]">

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


        </details>
      </div>
    </>

  );
}