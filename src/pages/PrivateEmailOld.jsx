import { Link } from "react-router-dom";
import PrivateFeature from "../components/PrivateFeature";
import { useEffect } from "react";
import savePaymentData from "../utils/savePaymentData";

const plans = [
  {
    title: "Private User Email Account",
    features: [
      "Unique Dashboard",
      "Email Delivery Notification",
      "Multi Language",
      "Private Account",
      "Email With Anti Spam Security",
      "Project Planner",
      "No Spamming Permitted",
      "No Advertisement",
    ],
    price: 3,
    note: "Note:Bobosoho email is free,If you purchase any products",
    links: [{ name: "BFIN IT", url: "bfinit.com" }],
  },
  {
    title: "Pensaki Pack For Home",
    features: [
      "Unique Dashboard Per User",
      "Up to 30 Private Users",
      "Doc Writer",
      "PDF Convertor",
      "Vault Cloud Space For Photos Videos Docs",
      "Access Via Application Any Device Anywhere with Wifi Connection",
    ],
    price: 9.5,
    note: "Note: It’s free if you buy any other Bfinit products like:",
    links: [
      { name: "Pensaki", url: "pensaki.org" },
      { name: "Omada-clasico", url: "omada-clasico.org" },
      { name: "Hosting-products", url: "bfinit.com" },
    ],
  },
];

const PrivateEmailOld = () => {
  useEffect(() => {
    localStorage.removeItem("paymentData");
  }, []);

  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      <div>
        <h1 className="my-5 text-center text-3xl font-semibold leading-normal lg:text-5xl">
          Private User Email Account
        </h1>
        <p className="px-0 text-center text-2xl lg:px-20">
          Bobosoho a private secured environment to email, chat and share.
          Bobosoho respects your privacy by offering an secured environment to
          chat share and email to family and friends. No advertising no, sharing
          of your details for marketing, a closed private enviroment gauranteed
          , Low cost monthly group fee .026cents per user per month. This could
          be super gift to your friends
        </p>
      </div>
      <div className="my-11 flex flex-col items-center justify-center gap-20 lg:flex-row">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-[400px] rounded-2xl bg-[url('./assets/bg.jpg')] bg-cover bg-center px-11 py-5 pb-20 text-white"
          >
            <h2 className="mb-4 text-center text-[32px] font-bold">
              {plan.title}
            </h2>
            <h3 className="mb-2 text-center text-[19px] font-semibold">
              UNIQUE FEATURES
            </h3>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 py-3 text-xl">
                  <span>✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="my-5 text-center">
              <Link
                to="/payment"
                onClick={() => savePaymentData(plan)}
                className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-400 px-4 py-2 text-lg font-bold"
              >
                {`${plan.price}€/Year`}
              </Link>
            </div>
            {plan.note && (
              <div className="mt-2 text-xs text-gray-300">
                <p>{plan.note}</p>
                {plan.links && (
                  <ul className="mt-2 space-y-1">
                    {plan.links.map((link, j) => (
                      <li key={j}>
                        <a
                          href={link.url}
                          className="text-blue-300 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <PrivateFeature />
    </section>
  );
};

export default PrivateEmailOld;
