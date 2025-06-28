import Image from "next/image";
import React from "react";

function DetialUser() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Image
        src={"/image/account/userdefultimage.jpg"}
        alt="defult"
        width={120}
        height={100}
        className="object-center border rounded-xl"
      />
      <h1 className="text-white text-xl mt-2">Mahdi</h1>
    </div>
  );
}

export default DetialUser;
