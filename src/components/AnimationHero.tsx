import Image from "next/image";

const AnimationHero = () => {

    return (
        <div className="h-[575px] w-[50%] mb-[50px]">
          <Image src={"/Hero Animation2.png"} alt="hero-animation" width={1000} height={500} />
        </div>
      );
    };

export default AnimationHero;