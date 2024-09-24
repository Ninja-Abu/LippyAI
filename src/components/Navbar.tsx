// import { 
//     Navbar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     Link,
//     Button,
// } from "@nextui-org/react";

// import Image from 'next/image';

// const LippyNavbar = () => {
//     return (
//         <Navbar className="border-2 border-red-300 bg-background sticky top-0 flex items-center justify-between mt-[50px] px-[150px] mb-[50px] h-[100px] w-full">

//         <NavbarBrand className="border-2 border-red-300" >
//           <Image src="/lippyLogo.png" alt="Lippy AI" width={51} height={48}/>
//           <p className="font-geologica font-semibold text-[42px] text-primary text-inherit ml-[15px]">lippy ai</p>
//         </NavbarBrand>


//         <NavbarContent className="border-2 border-red-300 flex items-center ml-auto gap-[50px] font-geologica text-primary text-[16px]">
//           <NavbarItem>
//             <Link color="foreground" href="#" className="focus:outline-none focus-visible:outline-none">
//               How it works?
//             </Link>
//           </NavbarItem>

//           <NavbarItem>
//             <Link href="#" aria-current="page" className="focus:outline-none focus-visible:outline-none">
//               Pricing
//             </Link>
//           </NavbarItem>

//           <NavbarItem>
//             <Button 
//               as={Link} 
//               color="primary" 
//               href="#" 
//               variant="flat"
//               className="bg-button text-primary px-4 py-2 rounded-full focus:outline-none focus-visible:outline-none"
//               >
//                 Book a Demo
//             </Button>
//           </NavbarItem>
//         </NavbarContent>

//       </Navbar>
//     );
// }

// export default LippyNavbar;

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LippyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 flex items-center justify-between px-[150px] 
      ${scrolled ? 'py-3' : 'py-[50px]'} transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center">
        <Image src="/lippyLogo.png" alt="Lippy AI" width={51} height={48} />
        <p className="font-geologica text-3xl font-semibold text-primary ml-4">lippy ai</p>
      </div>

      <div className="flex items-center space-x-8 text-primary text-lg font-geologica">
        <a href="#" className="hover:text-secondary">How it works?</a>
        <a href="#" className="hover:text-secondary">Pricing</a>
        <a href="#" className="bg-button text-white px-6 py-2 rounded-full hover:bg-yellow-500">Book a Demo</a>
      </div>
    </nav>
  );
};

export default LippyNavbar;