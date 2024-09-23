import { useState } from "react";
import { Input } from "@/components/ui/input";

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
        console.log(formData);
      };

    return (
        <form
            onSubmit={handleSubmit} 
            className=" flex flex-col justify-between h-[400px] w-[50%] p-[10px] my-[50px]">
            
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