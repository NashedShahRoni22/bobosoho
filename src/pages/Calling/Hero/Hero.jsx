import SectionWrapper from "../../../components/shared/SectionWrapper";
import bannerImg from "../../../assets/calls-page/banner.jpg";

export default function Hero() {
  return (
    <SectionWrapper>
      <h1 className="text-center text-4xl md:text-3xl">
        Seamless Video & Audio Calls
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-700">
        Experience crystal-clear communication with secure, high-quality calls.
        Your privacy is our priority. With end-to-end encryption, your personal
        messages stay between you and the recipient.
      </p>
      <div className="mt-16 h-[390px] w-full lg:h-[32rem]">
        <img
          src={bannerImg}
          alt="video call"
          loading="lazy"
          className="h-auto max-h-full w-auto max-w-full rounded-3xl object-contain lg:h-full lg:w-full lg:object-cover"
        />
      </div>
    </SectionWrapper>
  );
}
