import EmailBanner from "./EmailBanner/EmailBanner";
import EmailPricing from "./EmailPricing/EmailPricing";
import EmailFeatures from "./EmailFeatures/EmailFeatures";
import { useRef } from "react";

export default function EmailOverview() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <EmailBanner handleScrollToSection={handleScrollToSection} />
      <EmailPricing sectionRef={sectionRef} />
      <EmailFeatures />
    </main>
  );
}
