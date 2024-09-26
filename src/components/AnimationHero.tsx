import Image from "next/image";

import Globe from "./magicui/globe";
import HeroList from "./magicui/HeroList";

import UserStories from "./ui/UserStories";

const AnimationHero = () => {

    return (
        <div className="grid grid-cols-2 gap-2 h-full w-[50%]">
          <div className="h-[400px] overflow-hidden">
            <HeroList />  
          </div> 
          <div className="w-full h-[350px] flex justify-center">
            <Image src="/HeroImage.png" alt="Lippy AI Assistant" width={300} height={300} />  
          </div> 
          <div className="mt-[20px] w-full">
            <UserStories />
          </div>
          <div className="w-full  relative overflow-hidden mt-[30px]">
            <Globe className="absolute bottom-0 left-0 h-[400px]"/>
          </div> 
        </div>
      );
    };

export default AnimationHero;