import React from "react";
import shocking from "../assets/banner1.png"; // Image path

export default function Banner() {
  return (
    <section className="flex flex-col lg:flex-row h-auto lg:h-[100vh] items-center justify-between">
      {/* Left Side: Text */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-24 text-center lg:text-left">
        <h1 style={{lineHeight: "74px"}} className="text-4xl text-blue-500 lg:text-[55px] font-custom font-medium mb-6">
          Efficient, Secured, Organized, and User-Friendly Email Chats Sharing Platform
        </h1>
        <p style={{lineHeight: "40px"}} className="font-medium lg:text-xl mb-8">
          Stay organized and boost your productivity with a secure, integrated email platform. Seamlessly connect with other services to get more done in less time.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border-[1px] hover:border-blue-500 hover:text-blue-500">
            More Features
          </button>
          <button className="text-blue-500 border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
            Contact
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="bg-center bg-cover flex-1 h-[50vh] lg:h-[90vh] flex justify-center items-center mt-10 lg:mt-0">
        <img className="h-[50vh] lg:h-[80vh] w-auto" src={shocking} alt="Email platform" />
      </div>
    </section>
  );
}
