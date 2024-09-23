import { 
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";

import Image from 'next/image';

const LippyNavbar = () => {
    return (
        <Navbar className="bg-background sticky top-0 flex items-center justify-between mt-[50px] px-[150px] mb-[50px] h-[100px] w-full">

        <NavbarBrand className="" >
          <Image src="/lippyLogo.png" alt="Lippy AI" width={51} height={48}/>
          <p className="font-geologica font-semibold text-[42px] text-primary text-inherit ml-[15px]">lippy ai</p>
        </NavbarBrand>


        <NavbarContent className="flex items-center ml-auto gap-[50px] font-geologica text-primary text-[16px]">
          <NavbarItem>
            <Link color="foreground" href="#" className="focus:outline-none focus-visible:outline-none">
              How it works?
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="#" aria-current="page" className="focus:outline-none focus-visible:outline-none">
              Pricing
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Button 
              as={Link} 
              color="primary" 
              href="#" 
              variant="flat"
              className="bg-button text-primary px-4 py-2 rounded-full focus:outline-none focus-visible:outline-none"
              >
                Book a Demo
            </Button>
          </NavbarItem>
        </NavbarContent>

      </Navbar>
    );
}

export default LippyNavbar;