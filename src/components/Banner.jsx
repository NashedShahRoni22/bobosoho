import shocking from "../assets/first image.png";

export default function Banner() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 py-10 md:py-20 h-auto lg:h-[100vh] items-center justify-between mx-5 md:container md:mx-auto">
      {/* Left Side: Text */}
      <div className=" lg:w-1/2">
        <h1 className="text-5xl font-medium md:text-6xl">
          Efficient, Secure & User-Friendly{" "}
          <span className="text-primary">Email Sharing Platform</span>
        </h1>
        <p className="mb-10 mt-5 text-gray-600">
          Needing a secured environment that respects your privacy, then boost
          your security with family and close friends with Bobosoho's integrated
          secured email chat and share platform. Seamlessly connect to share
          messages instantly by email or chat, share videos, photos and
          documents{" "}
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
      <div className=" lg:w-1/2">
        <img className=" " src={shocking} alt="Email platform" />
      </div>
    </section>
  );
}
