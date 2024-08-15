import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              
            />
            <div className="flex gap-6"><p className="font-bold">Price: $250</p> 
            <p className="">Category: Baal</p> 
            </div>
            
            <p className="">Description: $Baal er product</p> 
            <p className="">Created time: 08/14/2024</p> 
          </CardBody>
        </Card> 
      </div>
    </div>
  );
};

export default Home;
