import PrimaryBtn from "./buttons/primaryBtn";
import bannerImg from "../assets/home-page/banner.png";

export default function Banner() {
  return (
    /* TODO: use px-5 instead of mx-5 */
    <section className="mx-5 flex flex-col items-center gap-16 py-10 md:container md:mx-auto md:py-20 lg:min-h-screen lg:flex-row lg:justify-between">
      {/* Left Side: Text */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-medium md:text-5xl">
          Efficient, Private, Secure & User-Friendly{" "}
          <span className="text-electricViolet">
            {" "}
            Email, call, voice & video, chat Sharing Platform
          </span>
        </h1>
        <p className="mb-10 mt-5 text-lg text-gray-600">
          Protect your privacy with Bobosoho’s secure email & chat platform.
          Instantly share messages, photos, videos, & documents with family &
          friends.
        </p>
        <div className="space-x-4 space-y-4 text-lg font-medium">
          <PrimaryBtn link="/business" bgFill={true}>
            More Features
          </PrimaryBtn>
          <PrimaryBtn link="/contact">Contact</PrimaryBtn>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2">
        <img
          className="h-[390px] w-full object-contain lg:h-auto"
          src={bannerImg}
          alt="Email platform"
          loading="lazy"
        />
      </div>
    </section>
  );
}
