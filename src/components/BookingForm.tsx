import { useState } from "react";
import { Input } from "@/components/ui/input";
import emailjs from "emailjs-com"; // Import EmailJS

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the form data for EmailJS
    const templateParams = {
      from_name: formData.name,         // The name of the sender
      to_name: "Recipient Name",        // The recipient's name (can be fixed or dynamic)
      message: formData.description,    // The message (description field in your form)
      email: formData.email,            // The email of the sender
      phone: formData.phone,            // The phone of the sender (optional if you want to include it)
    };

    // Send the email via EmailJS
    emailjs.send(
        'service_ucpuyy7',          // Replace with your EmailJS service ID
        'template_dvpiiq9',         // Replace with your EmailJS template ID
        templateParams,
        '3L6EZC23xaQ63BpW8'              // Replace with your EmailJS user ID
      )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
      alert('Failed to send email, please try again later.');
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-[400px] w-[50%] p-[10px] my-[50px]"
    >
      {/* Business Name */}
      <Input
        type="text"
        name="name"
        placeholder="Business Name/ Your Name"
        className="w-full"
        onChange={handleChange}
      />

      {/* Email */}
      <Input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full"
        onChange={handleChange}
      />

      {/* Phone */}
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="w-full"
        onChange={handleChange}
      />

      {/* Description */}
      <Input
        type="text"
        name="description"
        placeholder="Description"
        className="w-full h-[100px]"
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button className="bg-button text-primary text-[20px] font-inter font-semibold px-7 py-3 rounded-md w-full mt-4">
        Book Demo Now
      </button>
    </form>
  );
};

export default BookingForm;
