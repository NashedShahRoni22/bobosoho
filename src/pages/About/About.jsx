import AboutServices from "./AboutServices/AboutServices";
import aboutImg from "../../assets/about.png";

export default function About() {
  return (
    <main>
      {/* Banner Section */}
      <section className="flex min-h-[75vh] flex-col justify-center bg-gradient-to-b from-white to-[#f7f5ff] px-5 py-10 md:min-h-[90vh] md:py-20">
        <div className="md:container md:mx-auto">
          <h1 className="text-center text-4xl font-medium text-neutral-800 md:text-5xl">
            We believe a better world starts <br /> with{" "}
            <span className="text-electricViolet">privacy</span> and{" "}
            <span className="text-electricViolet">digital freedom</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-700">
            Bobosoho was founded in London in 2019 to develop business and
            financial software, redefining digital solutions for both
            enterprises and individuals.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutServices />

      <section className="min-h-[90vh] bg-gradient-to-b from-[#f7f5ff] via-white to-[#f7f5ff] px-5 py-10 md:py-20">
        <div className="md:container md:mx-auto">
          <h2 className="mb-16 text-center text-4xl font-medium text-neutral-800">
            Internet for the <span className="text-electricViolet">people</span>
            , by the <br /> <span className="text-electricViolet">people</span>
          </h2>
          <img
            src={aboutImg}
            alt="people walking"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
