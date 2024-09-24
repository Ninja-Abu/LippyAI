import { Accordion, AccordionItem } from "@nextui-org/react";

const useCasesList = [
    { 
      id: "1", 
      title: "Appointment-Based Services", 
      description: "For businesses like beauty salons, dental clinics, or auto repair shops, Lippy AI can manage inbound calls, book appointments, send confirmations, and reschedule appointments, saving time and reducing no-shows."
    },
    { 
      id: "2", 
      title: "Home Services", 
      description: "Electricians, plumbers, and other home service providers can use Lippy AI to answer customer inquiries, provide service details, and instantly schedule jobs, even after hours when no one is in the office."
    },
    { 
      id: "3", 
      title: "Mobile Services", 
      description: "Businesses like mobile notaries, pet groomers, or car detailers can rely on Lippy AI to handle calls while they’re on the go, ensuring they never miss a booking while on the job."
    },
    { 
      id: "4", 
      title: "Small Retail or Food Businesses", 
      description: "Coffee shops, bakeries, and small stores can use Lippy AI to manage orders, answer FAQs, and handle customer inquiries during busy hours, enhancing customer service without hiring extra staff."
    },
    { 
      id: "5", 
      title: "Event Services", 
      description: "Wedding planners, photographers, and venues can benefit from Lippy AI’s 24/7 availability to handle inquiries, book consultations, and manage scheduling changes without missing a beat."
    }
  ];

export default function FAQAccordion() {
  return (
    <Accordion defaultExpandedKeys={["1"]} className="font-inter text-[16px]">
      {useCasesList.map((item) => (
        <AccordionItem className="px-[40px]" key={item.id} title={item.title}>
          {item.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
}