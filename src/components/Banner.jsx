import shocking from "../assets/LandingBanner.png";

export default function Banner() {
  return (
    <section className="min-h-screen mx-5 py-10 flex flex-col gap-16 items-center justify-between md:py-20 md:container md:mx-auto lg:flex-row">
      {/* Left Side: Text */}
      <div className=" lg:w-1/2">
        <h1 className="text-5xl font-medium md:text-6xl">
          Efficient, Secure & User-Friendly {" "}
          <span className="text-primary">Email Sharing Platform</span>
        </h1>
        <p className="mb-10 mt-5 text-lg text-gray-600">
          Protect your privacy with Bobosoho’s secure email & chat platform.
          Instantly share messages, photos, videos, & documents with family &
          friends.
        </p>
        <div className="space-x-4 text-lg font-medium">
          <button className="bg-primary border-[1px] border-primary text-white px-6 py-2.5 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-primary">
            More Features
          </button>
          <button className="text-primary border border-primary px-6 py-2.5 rounded hover:bg-primary hover:text-white transition-all duration-300">
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
