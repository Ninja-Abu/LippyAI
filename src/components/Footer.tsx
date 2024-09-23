import Image from 'next/image';
import { AnimatedTooltip } from './ui/animated-tool-tip';

const people = [
    {
      id: 1,
      name: "Josh Lipman",
      designation: "Founder",
      image: "/JoshProfile.jpg",
    },
    {
      id: 2,
      name: "Kiruthik Sai",
      designation: "Product Manager",
      image: "/SaiProfile.jpg",
    },
    {
      id: 3,
      name: "Luke Lin",
      designation: "Data Scientist",
      image: "/LukeProfile.jpg",
    }
  ];

const Footer = () => {
    return (
        <div className="bg-primary text-white h-[400px] mb-[-30px] pt-[10px]">
            
            <div className='justify-between flex mt-[50px] px-[150px]'>
                <div className="flex items-center ">
                    <Image src="/lippyLogoWhite.png" alt="Lippy AI" width={51} height={48}/>
                    <p className="font-geologica font-semibold text-[35px] text-white text-inherit ml-[15px]">lippy ai</p>
                </div>
                <div className='flex flex-row ml-auto mr-0'>
                    <AnimatedTooltip items={people}/>
                </div>
            </div>

            <div className=' justify-between flex py-[50px] px-[150px]'>
                <div className='w-[60%]'>
                    <h1 className='font-semibold font-inter text-[24px]'>About Us</h1>
                    <p className='text-white-50 mt-4'>At Lippy AI, we recognize that missing leads is a significant obstacle to growth for small and medium-sized service businesses. With 62% of calls going unanswered and 85% of those customers moving on immediately, we saw an opportunity to revolutionize how businesses handle inbound inquiries. Our solution? AI-powered voice agents, driven by advanced language models, that can seamlessly manage calls, book appointments, and provide realistic, low-latency interactions. We offer an intuitive interface for creating custom agents, complete with integration to key applications, ensuring businesses never miss an opportunity. </p>
                </div>
                <div className=' flex flex-col justify-between w-[20%] text-right'>
                    <div>
                        <h1 className='font-semibold font-inter text-[24px]'>Contact Us</h1>
                        <p className='text-white-50 mt-4'>josh@lippy.ai</p>
                        <p className='text-white-50 mt-4'>(818)-631-9860</p>
                    </div>
                    <div>
                        © 2024, All Rights reserved by Lippy.ai
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
