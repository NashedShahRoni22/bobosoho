import SectionWrapper from "../../../components/shared/SectionWrapper";
import bannerImg from "../../../assets/calls-page/banner.jpg";

export default function Hero() {
  return (
    <SectionWrapper>
      <h1 className="text-center text-4xl md:text-5xl">
        Seamless Video & Audio Calls
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-700">
        Experience crystal-clear communication with secure, high-quality
        calls. Your privacy is our priority. With end-to-end
        encryption, your personal messages stay between you and the recipient.
      </p>
      <img
        src={bannerImg}
        alt="video call"
        className="mt-16 h-fit max-h-[32rem] w-full rounded-3xl object-cover"
      />
    </SectionWrapper>
  );
}
