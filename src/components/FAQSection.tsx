import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import FAQAccordian from "./ui/FAQAccordian";
import FAQUseCase from "./ui/FAQUseCaseAccordian";

let tabs = [
    {
      id: "Use Cases",
      label: "Use Cases",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "FAQ",
      label: "FAQ",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

const FAQSection = () => {
    return (
        <div className="h-[600px] flex w-full flex-col">
          <Tabs className="font-inter flex rounded-lg" color = {"primary"} aria-label="Options">
            <Tab key="FAQ" title="FAQ">
              <Card >
                <CardBody className="font-inter">
                  <FAQAccordian />
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="UseCases" title="Use Cases">
              <Card>
                <CardBody className="font-inter">
                  <FAQUseCase />
                </CardBody>
              </Card>  
            </Tab>
          </Tabs>
        </div>  
    );
};

export default FAQSection;