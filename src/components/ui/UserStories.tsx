import Image from "next/image";

export default function UserStories() {
    return (
      <div className="bg-button flex flex-col justify-center rounded-lg p-4 ml-[50px] w-[400px] h-full shadow-md">
        {/* Include the image here */}
        <div className="mb-[10px]">
          <Image className="rounded-t-lg w-full h-[150px] object-cover" src="/SBOProfile1.png" alt="SBO Profile" width={200} height={100} />
        </div>
        <div className="text-white font-inter">
          <h2 className="text-lg font-bold">Call from Sherri</h2>
          <p className="text-sm">Sherri booked an appointment for</p>
          <p className="text-sm font-semibold">7/04/2024</p>
        </div>
      </div>
    );
  }