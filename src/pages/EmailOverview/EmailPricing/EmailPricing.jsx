import SectionWrapper from "../../../components/shared/SectionWrapper";
import PricingCard from "../../../components/PricingCard";
import useIsPersonal from "../../../hooks/useIsPersonal";
import { personalEmailPrice } from "../../../data/personalEmailPrice";
import { businessEmailPrice } from "../../../data/businessEmailPrice";

export default function EmailPricing() {
  const personalUser = useIsPersonal();

  return (
    <div className="min-h-screen bg-primary text-white">
      <SectionWrapper>
        <h2 className="text-center text-4xl font-medium capitalize md:text-5xl">
          Choose a plan & start protecting <br /> your{" "}
          {personalUser ? "Personal" : "Business"} data
        </h2>

        <div className="mx-auto mt-20 grid grid-cols-12 gap-y-16 md:max-w-4xl md:gap-x-16">
          {(personalUser ? personalEmailPrice : businessEmailPrice).map(
            (details, i) => (
              <PricingCard key={i} details={details} />
            ),
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
