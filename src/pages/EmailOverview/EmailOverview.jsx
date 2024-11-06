import EmailBanner from "./EmailBanner/EmailBanner";
import EmailPricing from "./EmailPricing/EmailPricing";
import EmailFeatures from "./EmailFeatures/EmailFeatures";

export default function EmailOverview() {
  return (
    <main>
      <EmailBanner />
      <EmailPricing />
      <EmailFeatures />
    </main>
  );
}
