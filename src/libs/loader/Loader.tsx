import Image from "next/image";
import React from "react";
import LoaderGif from "../../assets/loader/loader.gif";

const NHLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image src={LoaderGif} width={400} height={400} alt="Loading Image" />
    </div>
  );
};

export default NHLoader;
