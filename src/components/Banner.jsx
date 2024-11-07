import PrimaryBtn from "./buttons/primaryBtn";
import bannerImg from "../assets/home-page/banner.png";

export default function Banner() {
  return (
    <section className="mx-5 flex min-h-screen flex-col items-center justify-between gap-16 py-10 md:container md:mx-auto md:py-20 lg:flex-row">
      {/* Left Side: Text */}
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-medium md:text-6xl">
          Efficient, Secure & User-Friendly{" "}
          <span className="text-electricViolet">Email Sharing Platform</span>
        </h1>
        <p className="mb-10 mt-5 text-lg text-gray-600">
          Protect your privacy with Bobosoho’s secure email & chat platform.
          Instantly share messages, photos, videos, & documents with family &
          friends.
        </p>
        <div className="space-x-4 space-y-4 text-lg font-medium">
          <PrimaryBtn to="/business" bgFill={true}>
            More Features
          </PrimaryBtn>
          <PrimaryBtn to="/contact">Contact</PrimaryBtn>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2">
        <img className=" " src={bannerImg} alt="Email platform" />
      </div>
    </section>
  );
}
