


const Pricing = () => {
    return(
        
        <div className="flex justify-evenly items-center mx-[150px] my-[100px] ">
            {/* Standard Plan */}
            <div className="bg-blue-600 text-white rounded-xl shadow-lg w-[500px] p-6">
                <h2 className="text-2xl font-geologica font-bold flex justify-center">Standard</h2>
                <p className="text-7xl font-bold font-inter flex justify-center items-baseline py-5">$ 0.25<span className="text-xl">/min</span></p>
                <p className="text-sm mt-4 font-inter text-[16px] text-center px-2 pb-5">Perfect for Small to mid-sized businesses looking for a flexible, easy-to-integrate voice AI solution.</p>
                <hr className="border-t-2 border-white my-4" />
                <ul className="mt-4 space-y-5 pt-5 px-5">
                    <li>Inbound or outbound agents fully integrated with any application from our available suite of your choice.</li>
                    <li>Agents are created white-glove by us, ensuring a tailored experience.</li>
                    <li>Fully customizable with a choice of hundreds of voices to match your brand.</li>
                    <li>Multilingual: Able to speak hundreds of languages to serve diverse customer bases.</li>
                    <li>$200 one-time fee</li>
                </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-lime-400 text-white rounded-xl shadow-lg w-[500px] p-6">
            <h2 className="text-2xl font-geologica font-bold flex justify-center">Enterprise</h2>
                <p className="text-6xl font-bold font-inter flex justify-center items-baseline py-5">$ Custom<span className="text-xl">/min</span></p>
                <p className="text-sm mt-4 font-inter text-[16px] text-center px-2 pb-5">Perfect for large enterprises or businesses with high call volumes (1440+ minutes a month) that need additional customization, support, and analytics.</p>
                <hr className="border-t-2 border-white my-4" />
                <ul className="mt-4 space-y-5 pt-5 px-5">
                    <li>Priority customer support: Get fast, dedicated assistance whenever you need it.</li>
                    <li>Advanced analytics: Gain insights into call performance and customer interactions.</li>
                    <li>Voice dubbing: Enhance customer engagement with high-quality voiceovers and dubbing services.</li>
                    <li>Whitelabel support: If you’re an agency, make our technology your own with fully branded solutions.</li>
                    <li>Contact Us for custom pricing tailored to your needs.</li>
                </ul>
            </div>
        </div>
    );
};

export default Pricing;