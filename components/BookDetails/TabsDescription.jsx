import React from "react";
import { Tabs, Tab } from "./Tabs";
import BookInfo from "./BookInfo";
import Reviews from "./Reviews";
const TabsDescription = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Tab" title="Book Info">
          <BookInfo />
        </Tab>
        <Tab label="Tab 2" title="Reviews">
          <Reviews />
        </Tab>
        <Tab label="Tab 3" title="Highlights">
          <div className="py-4">
            <p className="text-white">
              debitis quas aliquid. Reprehenderit, quia. Quo neque error
              repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
              modi at sunt excepturi expedita sint? Sed quibusdam recusandae
              alias error harum maxime adipisci amet laborum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium
              nemo autem. Veritatis obcaecati tenetur iure eius earum ut
              molestias architecto voluptate aliquam nihil, eveniet aliquid
              culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error,
              harum nesciunt ipsum
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
export default TabsDescription;
