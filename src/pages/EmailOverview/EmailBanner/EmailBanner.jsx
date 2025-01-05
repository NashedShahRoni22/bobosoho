import SectionWrapper from "../../../components/shared/SectionWrapper";
import privateEmail from "../../../assets/private-email.png";
import useIsPersonal from "../../../hooks/useIsPersonal";
import { FaArrowRight } from "react-icons/fa6";

export default function EmailBanner({ handleScrollToSection }) {
  const personalUser = useIsPersonal();

  return (
    <SectionWrapper>
      <div className="flex min-h-[65vh] flex-col gap-16 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <p className="text-xl font-medium">
            For {personalUser ? "Personal" : "Business"} User
          </p>
          <h1 className="mb-7 mt-2.5 max-w-xl text-3xl font-medium">
            Experience Privacy and Security with Bobosoho for Email, Chat &
            Sharing.
          </h1>
          <p className="mb-14 max-w-lg text-xl text-neutral-600">
            Simple and Secure, keeping your connections private—no ads, no data
            sharing.
          </p>

          <button
            onClick={handleScrollToSection}
            className={`"border-transparent text-white" group inline-flex items-center rounded-full border bg-gradient-to-r from-electricViolet to-[#9055ff] px-5 py-3.5 font-semibold text-white md:px-5 lg:text-xl`}
          >
            <span className="flex items-center px-3">
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                Get Bobosoho for {personalUser ? "Personal" : "Business"}
              </span>
            </span>
            <FaArrowRight className="-ml-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>

        <div className="flex justify-center lg:w-1/2">
          <img
            src={privateEmail}
            alt="bobosoho private email"
            className="h-[390px] w-full object-contain lg:h-auto"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
