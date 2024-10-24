import React from 'react'
import BussinessFeature from '../components/BussinessFeature';
const plans = [
    {
      title: "Private User Email Account",
      features: [
        "Unique Dashboard",
        "Email Delivery Notification",
        "Multi Language",
        "Master(Admin) Dashboard",
        "Project Planner",
        "Private Account",
        "Email With Anti Spam Security",
        "Project Planner",
        "No Spamming Permitted",
        "No Advertisement",
      ],
      price: "6€/Year",
      note: "Note:Bobosoho email is free,If you purchase any products",
      links: [
        { name: "BFIN IT", url: "bfinit.com" },
        ],
    },
    {
      title: "Pensaki Pack For Home",
      features: [
        "Unique Dashboard Per User",
        "Upto 100 Private Users",
        "Doc Writer",
        "PDF Convertor",
        "Vault Cloud Space For Photos Videos Docs",
        "Access Via Application Any Device Anywhere with Wifi Connection",
      ],
      price: "39.50€/Year",
      note: "Note: It’s free if you buy any other Bfinit products like:",
      links: [
        { name: "Pensaki", url: "pensaki.org" },
        { name: "Omada-clasico", url: "omada-clasico.org" },
        { name: "Hosting-products", url: "bfinit.com" },
      ],
    },
  ];

const BusinessEmail = () => {
  return (
    <section className='mx-5 md:container md:mx-auto'>
    <div>
      <h1 className="text-3xl lg:text-5xl leading-normal font-semibold text-center my-5">Bussiness Email Account</h1>
      <p className='lg:px-20 px-0 text-center text-2xl'>Bobosoho  a private secured environment to email, chat and share business documents, 
        videos, projects as Bobosoho respects your privacy by offering an secured environment to chat share and email to family and friends.
         No advertising no, sharing of your details for marketing, a closed private enviroment gauranteed. Upto 100 accounts ( extendable) 
         gauranteeing a private secured enviroment, each user with a dedicated interface recupabale by master admin when required, thus ensuring 
         continuation , Low cost monthly group fee 0.5cents per user per month. This could be very helpful for your business.</p>
    </div>
    <div className="flex justify-center flex-col lg:flex-row items-center  gap-20 my-11">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-[url('./assets/bg.jpg')] bg-center bg-cover h-[125vh] text-white rounded-2xl py-5 pb-20 px-11 w-[400px]"
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
    <BussinessFeature/>
  </section>

  )
}

export default BusinessEmail
