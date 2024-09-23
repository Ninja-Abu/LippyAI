import { HoverBorderGradient } from "./ui/hover-border-gradient";

const SOPHero = () => {
    return (
        <div className=" flex flex-col justify-center h-[575px] w-[50%]">
            <p className="font-inter font-extrabold text-primary text-8xl">
                Your Permanent 
                <br/> 
                Front Desk
            </p>

            <p className="font-inter font-medium text-text text-base w-[80%] mt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed euismod nunc, vel sollicitudin ligula. Maecenas fringilla justo nunc, vitae dapibus purus posuere a. Vivamus elementum urna quis lacinia porttitor. 
            </p>

            <div className="mt-[40px] w-full flex justify-center">
                <HoverBorderGradient>
                    Automate your phone calls now 
                </HoverBorderGradient>
            </div>
        </div>
      );
};

export default SOPHero;