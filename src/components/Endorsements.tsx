import React, { useEffect, useState } from "react";
import Image from "next/image";

const Endorsements = () => {
  return (
    <div className="h-[100px] my-[50px]">
      <Image src="/Endorsements.png" alt="Endorsements" width={1544} height={1080/2} />
    </div>
  );
};

export default Endorsements;