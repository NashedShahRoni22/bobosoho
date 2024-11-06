import SectionWrapper from "../../../components/shared/SectionWrapper";
import PrimaryBtn from "../../../components/buttons/primaryBtn";
import privateEmail from "../../../assets/private-email.png";
import useIsPersonal from "../../../hooks/useIsPersonal";

export default function EmailBanner() {
  const personalUser = useIsPersonal();

  return (
    <SectionWrapper>
      <div className="flex min-h-screen flex-col gap-16 lg:flex-row">
        <div className="lg:w-1/2">
          <p className="text-xl font-medium">
            For {personalUser ? "Personal" : "Business"} User
          </p>
          <h1 className="mb-7 mt-2.5 max-w-xl text-5xl font-medium">
            Experience Privacy and Security with Bobosoho for Email, Chat &
            Sharing.
          </h1>
          <p className="mb-14 max-w-lg text-xl text-neutral-600">
            Simple and Secure, keeping your connections private—no ads, no data
            sharing.
          </p>
          <PrimaryBtn
            to={`${personalUser ? "/business" : "/private"}`}
            bgFill={true}
          >
            Get Bobosoho for {personalUser ? "Business" : "Personal"}
          </PrimaryBtn>
        </div>

        <div className="flex justify-center lg:w-1/2">
          <img
            src={privateEmail}
            alt="bobosoho private email"
            className="h-fit w-full object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
