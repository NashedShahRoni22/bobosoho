import SectionWrapper from "../../../components/shared/SectionWrapper";
import useIsPersonal from "../../../hooks/useIsPersonal";
import FeatCard from "../../../components/Cards/FeatCard";
import personalEmailFeat from "../../../data/personalEmailFeat";
import businessEmailFeat from "../../../data/businessEmailFeat";

export default function EmailFeatures() {
  const personalUser = useIsPersonal();

  return (
    <SectionWrapper>
      <h2 className="text-center text-4xl font-medium capitalize md:text-5xl">
        Encrypted email <br /> that ensures{" "}
        {personalUser ? "personal" : "business"} privacy
      </h2>

      <div className="mt-16 grid grid-cols-12 gap-y-8 md:gap-x-8">
        {(personalUser ? personalEmailFeat : businessEmailFeat).map((feat) => (
          <FeatCard key={feat.id} feat={feat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
