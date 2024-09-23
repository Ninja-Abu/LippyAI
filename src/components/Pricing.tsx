import Image from 'next/image';

const Pricing = () => {
    // return (
    //     <div className="flex justify-center h-[500px] my-[50px] mx-[150px] space-x-[200px]">
    //     {/* Standard Plan */}
    //     <div className="bg-primary text-white rounded-2xl w-[30%] p-8 flex flex-col items-center">
    //       <h2 className="text-2xl font-semibold">Standard</h2>
    //       <p className="text-5xl font-bold mt-4">$0.25 <span className="text-lg">/min</span></p>
    //       <p className="text-sm mt-4 text-center">Perfect for small to mid-sized businesses looking for a flexible, easy-to-integrate voice AI solution.</p>
    //       <hr className="border-t border-gray-300 w-full my-4"/>
    //       <ul className="mt-6 text-sm space-y-2">
    //         <li>Fully integrate inbound or outbound calls for any application.</li>
    //         <li>Fully integrate inbound or outbound calls for any application.</li>
    //       </ul>
    //     </div>
  
    //     {/* Enterprise Plan */}
    //     <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl w-[30%] p-8 flex flex-col items-center">
    //       <h2 className="text-2xl font-semibold">Enterprise</h2>
    //       <p className="text-5xl font-bold mt-4">$Custom <span className="text-lg">/min</span></p>
    //       <p className="text-sm mt-4 text-center">Perfect for businesses looking for a flexible, easy-to-integrate voice AI solution.</p>
    //       <hr className="border-t border-gray-300 w-full my-4"/>
    //       <ul className="mt-6 text-sm space-y-2">
    //         <li>Fully integrate inbound or outbound calls for any application.</li>
    //         <li>Fully integrate inbound or outbound calls for any application.</li>
    //       </ul>
    //     </div>
    //   </div>
    // );
    return(
        <div className="flex justify-center w-[100%] my-[100px]">
            <Image src="/Pricing.png" alt="Pricing" width={1300} height={1080/2} />
        </div>
    );
};

export default Pricing;