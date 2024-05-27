import React from "react";

const Hero = () => {
  return (
    <div className='container mx-auto flex items-center justify-center w-full relative my-10 p-4'>
      <div className='bg-[#E8F1FB80] p-8 max-w-lg w-full text-center shadow-2xl shadow-sky-100 z-10'>
        <h2 className='font-bold text-3xl'>Blog</h2>
        <p className='text-sm mt-3 text-[#636363]'>
          Welcome to the SecureOps Blog, your gateway to a world of insights and
          expertise in DevOps and technology trends.
        </p>
      </div>
      <div className='bg-gray-[#B8D2F3] p-8 max-w-xs w-full text-center shadow-2xl shadow-sky-100 absolute top-2 translate-x-2 h-full opacity-50' />
    </div>
  );
};

export default Hero;
