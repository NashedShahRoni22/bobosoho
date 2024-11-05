import PrivateEmailBanner from "./PrivateEmailBanner/PrivateEmailBanner";
import PrivateEmailPricing from "./PrivateEmailPricing/PrivateEmailPricing";
import PrivateEmailFeatures from "./PrivateEmailFeatures/PrivateEmailFeatures";

export default function PrivateEmail() {
  return (
    <main>
      <PrivateEmailBanner />
      <PrivateEmailPricing />
      <PrivateEmailFeatures />
    </main>
  );
}
