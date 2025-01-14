import { FaRegCircleCheck } from "react-icons/fa6";
import feat1Img from "../assets/home-page/feat-1.png";
import feat2Img from "../assets/home-page/feat-2.png";
import feat3Img from "../assets/home-page/feat-3.png";
import feat4Img from "../assets/home-page/feat-4.png";

const featuresData = [
  {
    title: [
      "Bobosoho is a collaboration platform for ",
      <span key="bobosoho" className="text-electricViolet">
        Private & Business use
      </span>,
    ],
    description:
      "Enhanced project sharing and team work with our secured communication features, enabling smooth quick instant sharing.",
    benefits: [
      "Instant Messaging: Communicate instantly with your team without leaving the platform.",
      "File Sharing: Share documents securely and efficiently with just a few clicks.",
      "Task Management: Assign and track tasks to ensure everyone is on the same page.",
      "Creating groups: Create unlimited groups and email instantly bobosoho to bobosoho or send direct to any other email address.",
      "Secured: To most secured email platforms",
      "Spam Managing: Spam manager controlling who and what you want to receive in your inbox box.",
      "Easy to save: Easy to save messages in new create categories like save files and each to delete spam, unwanted messages with all select delete instantly ",
    ],
    image: feat2Img,
  },
  {
    title: [
      "Secured, private, user friendly social environment for ",
      <span key="bobosoho" className="text-electricViolet">
        email and chat sharing
      </span>,
    ],
    description:
      "Now join as an individual or with a group of friends family and create new image photos, videos, chat. Create your text message within seconds and share instantly to your group with unlimited users. Bobosoho integrated chat to connect in full security no sharing of your private info, respecting your privacy policy, bobosoho is your secured private environment to chat share photos videos and more, create unlimited groups with unlimited users, family or friends and instantly share with them",
    benefits: [
      "Smart Search: Quickly using the search bar find the emails or friends by their name or email, mobile number not required, but can be used and build your social group with unlimited users",
      "Real-Time Updates: Keep track of new messages with real-time notifications and an intuitive inbox layout.",
      "Seamless Navigation: Switch between contacts, settings, and other features using the sidebar, making email management a breeze.",
    ],
    image: feat1Img,
  },
  {
    title: [
      "The Most ",
      <span key="secured" className="text-electricViolet">
        Secured Email{" "}
      </span>,
      "chat share",
    ],
    description:
      "Ensure the highest level of security for your communication with our advanced protection features, giving you peace of mind.",
    benefits: [
      "Data Encryption: Total secured environment respecting your privacy.",
      "Secure Access:Bobosoho respects your data, its yours, your space no sharing of data totally ",
      "Threat Detection: Detect and block unauthorized access attempts with real-time monitoring.",
    ],
    image: feat3Img,
  },
  {
    title: [
      <span key="next-level" className="text-electricViolet">
        Next-Level Secure{" "}
      </span>,
      "Messaging & Calling",
    ],
    description:
      "Connect freely and safely with powerful chat features designed to prioritize privacy and convenience, perfect for modern communication.",
    benefits: [
      "Seamless Communication: Effortlessly connect via text, call, and media sharing without limits.",
      "Unlimited Sharing: Enjoy text, call, and media sharing without limits.",
      "Privacy-First Communication: No phone number required to connect with friends or groups.",
      "Flexible Connectivity: Optimized for low Wi-Fi and G-bandwidth usage.",
      "Instant Media Control: Send images with instant delete options for added security.",
      "Group-Friendly Features: Publish videos and connect with unlimited contacts.",
      "Zero Tolerance Policy: Strong protection against intimidation and misuse for a safe environment.",
    ],
    note: [
      <span key={"please note"} className="font-semibold text-black">
        Please Note:{" "}
      </span>,
      "A small charge of $0.60 applies for video/audio calls.",
    ],
    image: feat4Img,
  },
];

export default function Features() {
  return (
    <>
      {featuresData.map((feature, index) => (
        <section key={index} className={`${index % 2 === 0 && "bg-gray-200"}`}>
          <div
            key={index}
            className={`flex flex-col items-center justify-between gap-16 px-5 py-10 md:container md:mx-auto md:min-h-screen md:py-20 lg:flex-row`}
          >
            {/* Alternate layout based on the index for large devices */}
            <div
              className={`lg:w-1/2 ${
                index % 2 === 0 ? "order-2 lg:order-1" : "order-1 lg:order-2"
              } `}
            >
              <img
                src={feature.image}
                alt={`${feature.title} Example`}
                loading="lazy"
                className="h-[390px] w-full object-contain lg:h-auto"
              />
            </div>

            <div
              className={`text-left lg:w-1/2 ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <h1 className="text-4xl font-semibold capitalize leading-normal">
                {feature.title}
              </h1>
              <p className="pb-6 pt-3 text-lg text-gray-600">
                {feature.description}
              </p>
              <ul className="space-y-4 text-lg text-gray-600">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3.5">
                    <FaRegCircleCheck className="mt-1.5 min-w-fit text-electricViolet" />{" "}
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-lg text-gray-600">{feature?.note}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
