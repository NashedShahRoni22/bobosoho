import CallPrivacyCard from "../../../components/Cards/CallPrivacyCard";
import SectionWrapper from "../../../components/shared/SectionWrapper";
import { callPrivacyFeat } from "../../../data/callPrivacyFeat";

export default function CallFeatCards() {
  return (
    <SectionWrapper>
      <h2 className="text-center text-4xl md:text-5xl">
        Secure your conversations
      </h2>
      <p className="mt-6 text-center text-xl font-medium text-neutral-700">
        Call privately for an affordable rate. Enjoy peace of mind with every
        call.
      </p>
      {/* Cards Container */}
      <div className="mt-20 grid grid-cols-12 gap-y-8 md:gap-x-8">
        {callPrivacyFeat.map((feat) => (
          <CallPrivacyCard key={feat.id} feat={feat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
