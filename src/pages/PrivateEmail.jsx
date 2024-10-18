import React from 'react'
import PrivateFeature from '../components/PrivateFeature';

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
    price: "3€/Year",
    note: "Note:Bobosoho email is free,If you purchase any products",
    links: [
      { name: "BFIN IT", url: "bfinit.com" },
      ],
  },
  {
    title: "Pensaki Pack For Home",
    features: [
      "Unique Dashboard Per User",
      "Up to 20 Private Users",
      "Doc Writer",
      "PDF Convertor",
      "Vault Cloud Space For Photos Videos Docs",
      "Access Via Application Any Device Anywhere with Wifi Connection",
    ],
    price: "9.50€/Year",
    note: "Note: It’s free if you buy any other Bfinit products like:",
    links: [
      { name: "Pensaki", url: "pensaki.org" },
      { name: "Omada-clasico", url: "omada-clasico.org" },
      { name: "Hosting-products", url: "bfinit.com" },
    ],
  },
];

const PrivateEmail = () => {
  return (
    <section>
      <div>
        <h1 className="text-center text-6xl py-5 font-custom font-bold">Private User Email Account</h1>
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-center gap-20 my-11">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[url('./assets/bg.jpg')] bg-center bg-cover text-white rounded-2xl py-5 pb-20 px-11 w-[400px]"
          >
            <h2 className="text-[32px] font-bold text-center mb-4">{plan.title}</h2>
            <h3 className="font-semibold text-[19px] text-center mb-2">UNIQUE FEATURES</h3>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-xl gap-2 py-3">
                  <span>✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-400 rounded-full py-2 px-4 inline-block text-lg font-bold">
                {plan.price}
              </div>
            </div>
            {plan.note && (
              <div className="mt-2 text-xs text-gray-300">
                <p>{plan.note}</p>
                {plan.links && (
                  <ul className="mt-2 space-y-1">
                    {plan.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.url} className="text-blue-300 hover:underline">
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
      <PrivateFeature/>
    </section>

    
  );
};

export default PrivateEmail;
