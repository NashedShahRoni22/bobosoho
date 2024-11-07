import AboutServices from "./AboutServices/AboutServices";
import aboutImg from "../../assets/about.png";
import aboutBannerImg from "../../assets/about-banner.png";
import AboutOverview from "./AboutOverview/AboutOverview";

export default function About() {
  return (
    <main>
      {/* Banner Section */}
      <section
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(10, 0, 50, 0.7)), url(${aboutBannerImg})`,
        }}
        className="flex min-h-[75vh] flex-col justify-center px-5 py-10 md:min-h-[90vh] md:py-20"
      >
        <div className="md:container md:mx-auto">
          <h1 className="text-center text-4xl font-medium text-white md:text-5xl">
            We believe a better world starts <br /> with{" "}
            <span className="text-electricViolet">privacy</span> and{" "}
            <span className="text-electricViolet">digital freedom</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-100">
            Bobosoho was founded in France in 2019 to develop business and
            financial software, redefining digital solutions for both
            enterprises and individuals.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutServices />

      {/* About Overview Section */}
      <AboutOverview />

      <section className="min-h-[90vh] bg-gradient-to-b from-[#f7f5ff] via-white to-[#f7f5ff] px-5 py-10 md:py-20">
        <div className="md:container md:mx-auto">
          <h2 className="mb-16 text-center text-4xl font-medium text-neutral-800">
            Internet for the <span className="text-electricViolet">people</span>
            , by the <br /> <span className="text-electricViolet">people</span>
          </h2>
          <img
            src={aboutImg}
            alt="people walking"
            className="h-96 w-full rounded-md object-cover md:h-full"
          />
        </div>
      </section>
    </main>
  );
}
