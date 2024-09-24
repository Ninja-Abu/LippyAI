import { Accordion, AccordionItem } from "@nextui-org/react";

const faqList = [
  { 
    id: "1", 
    question: "What is Lippy AI?", 
    answer: "Lippy AI is an AI-powered voice agent that answers inbound calls, books appointments, and provides real-time responses to customer inquiries, ensuring your business never misses a call." 
  },
  { 
    id: "2", 
    question: "How does Lippy AI benefit my business?", 
    answer: "Lippy AI helps you capture missed calls, reduce lost leads, and improve customer service, replacing outdated voicemail systems and manual call handling with an efficient AI-driven solution." 
  },
  { 
    id: "3", 
    question: "Can I turn Lippy AI on and off as needed?", 
    answer: "Yes, you can activate or deactivate Lippy AI anytime, allowing you to step into the conversation when desired and maintain full control over your customer interactions." 
  },
  { 
    id: "4", 
    question: "How quickly can Lippy AI be set up?", 
    answer: "We offer a white-glove setup service that gets you up and running within a day. We’re also developing self-service options that will allow you to set up in minutes, including integrations with your existing systems." 
  },
  { 
    id: "5", 
    question: "Can I use my existing phone number?", 
    answer: "Absolutely! You can either integrate Lippy AI with your current number or choose to have us provide a new dedicated line for your business." 
  },
  { 
    id: "6", 
    question: "Do I need technical skills to use Lippy AI?", 
    answer: "No technical skills are needed. Unlike our competitors, we handle the setup and integration for you, so you can start benefiting from Lippy AI without dealing with complex third-party systems." 
  },
  { 
    id: "7", 
    question: "What types of businesses use Lippy AI?", 
    answer: "Lippy AI is perfect for service-based businesses like home services, appointment-based businesses, mobile services, small retail, and event service providers—anywhere customer communication is crucial." 
  }
];

export default function FAQAccordion() {
  return (
    <Accordion defaultExpandedKeys={["1"]}>
      {faqList.map((item) => (
        <AccordionItem className="px-[40px]" key={item.id} title={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}