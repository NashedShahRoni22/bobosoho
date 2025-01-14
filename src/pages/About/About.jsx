import AboutServices from "./AboutServices/AboutServices";
import AboutOverview from "./AboutOverview/AboutOverview";
import bannerImg from "../../assets/about-page/banner.png";
import connectionsImg from "../../assets/about-page/true-connections.png";

export default function About() {
  return (
    <main>
      {/* Banner Section */}
      <section
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.86), rgba(10, 0, 30, 0.95)), url(${bannerImg})`,
        }}
        className="flex min-h-[75vh] flex-col justify-center px-5 py-10 md:min-h-[90vh] md:py-20"
      >
        <div className="md:container md:mx-auto">
          <h1 className="text-center text-4xl font-medium text-white md:text-3xl">
            We believe a better world starts <br /> with{" "}
            <span className="text-electricViolet">Privacy</span> and{" "}
            <span className="text-electricViolet">Digital Freedom</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-100">
            Bobosoho values your privacy, ensuring that your chats and shared
            content are fully secure and accessible only through your profile.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutServices />

      {/* About Overview Section */}
      <AboutOverview />

      {/* Connection & Privacy Section */}
      <section className="min-h-[90vh] bg-gradient-to-b from-[#f7f5ff] via-white to-[#f7f5ff] px-5 py-10 md:py-20">
        <div className="md:container md:mx-auto">
          <h2 className="text-center text-4xl font-medium text-neutral-800">
            Internet for True{" "}
            <span className="text-electricViolet"> Connections</span>
            <br /> & <span className="text-electricViolet">Privacy</span>
          </h2>
          <p className="mx-auto mb-16 mt-6 max-w-xl text-center text-lg text-neutral-700">
            Internet for the people, connecting true friends and family with
            privacy and security. Bobosoho fosters a respectful space, free from
            intimidation and insults.
          </p>
          <img
            src={connectionsImg}
            alt="people walking"
            loading="lazy"
            className="h-[390px] w-full rounded-md object-cover lg:h-auto"
          />
        </div>
      </section>
    </main>
  );
}
