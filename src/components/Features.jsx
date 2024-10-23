import React from "react";
import banner2 from "../assets/Integrated.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/spam.png";

const featuresData = [
  {
    title: "The Easiest and Most Efficient Emailing Platform with Integrated Chat ",
    description: "Now create new image photos mobile chat and say Put in a chat second create it say Bobosoho integrated chat to connect in full security no sharing of your private info, respecting your privacy, your environment to chat share photos videos and more, create unlimited groups family or friends and instantly share with them ",
    benefits: [
      "Smart Search: Quickly find the emails you need using the built-in search bar.",
      "Real-Time Updates: Keep track of new messages with real-time notifications and an intuitive inbox layout.",
      "Seamless Navigation: Switch between contacts, settings, and other features using the sidebar, making email management a breeze."
    ],
    image: banner2,
  },
  {
    title: "Bobosoho also an advanced collaboration communications tools platform for private and business users",
    description: "Enhanced project sharing and team work with our secured communication features, enabling smooth quick instant sharing.",
    benefits: [
      "Instant Messaging: Communicate instantly with your team without leaving the platform.",
      "File Sharing: Share documents securely and efficiently with just a few clicks.",
      "Task Management: Assign and track tasks to ensure everyone is on the same page.",
      "Creating groups: Create unlimited groups and email instantly bobosoho to bobosoho or send direct to any other email address.",
      "Secured: To most secured email platforms",
      "Spam Managing: Spam manager controlling who and what you want to receive in your inbox box.",
      "Easy to save: Easy to save messages in new create categories like save files and each to delete spam, unwanted messages with all select delete instantly "
    ],
    image: banner3,
  },
  {
    title: "The most secured email chat share",
    description: "Ensure the highest level of security for your communication with our advanced protection features, giving you peace of mind.",
    benefits: [
      "Data Encryption: Total secured environment respecting your privacy.",
      "Secure Access:Bobosoho respects your data, its yours, your space no sharing of data totally ",
      "Threat Detection: Detect and block unauthorized access attempts with real-time monitoring."
    ],
    image: banner4,
  },
];

export default function Features() {
  return (
    <section className="mx-5 md:container md:mx-auto">
      {featuresData.map((feature, index) => (
        <div key={index} className="flex flex-col lg:flex-row gap-16 py-10 md:py-20 h-auto lg:h-[100vh] items-center justify-between">
          {/* Alternate layout based on the index for large devices */}
          <div className={`lg:w-1/3  ${index % 2 === 0 ? "order-1" : "order-2"} `}>
            <img src={feature.image} alt={`${feature.title} Example`} className="w-full h-auto max-w-lg" />
          </div>

          <div className={`lg:w-2/3  text-left ${index % 2 === 0 ? "order-2" : "order-1"}`}>
            <h1 className="text-2xl lg:text-4xl leading-normal font-semibold text-blue-500">
              {feature.title}{" "}
              <span className="text-blue-500">Platform</span>
            </h1>
            <p style={{ lineHeight: "35px" }} className="text-lg lg:text-xl py-6 text-gray-700">
              {feature.description}
            </p>
            <ul className="list-none space-y-4">
              {feature.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-yellow-500 mr-2">✔️</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
