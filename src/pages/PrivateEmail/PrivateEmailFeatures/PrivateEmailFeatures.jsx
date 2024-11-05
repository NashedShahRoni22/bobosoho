import { AiOutlineFileProtect } from "react-icons/ai";
import { BsSliders2Vertical } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import SectionWrapper from "../../../shared/SectionWrapper";

export default function PrivateEmailFeatures() {
  const featuresData = [
    {
      id: "feature1",
      title: "Secure Your Privacy with End-to-End Encrypted Email",
      description:
        "Our End-to-End Encryption Email Platform ensures that all messages and shared files are encrypted during transmission, safeguarding data from interception and tampering. Privacy is paramount—only the sender and recipient can access messages, boosting user trust and meeting regulatory standards.",
      features: [
        "Privacy Protection: Ensures only sender and recipient can access messages.",
        "Security: Safeguards data from interception and tampering.",
        "User Trust: Builds confidence through regulatory compliance and strong data protection.",
      ],
      Icon: CiLock,
    },
    {
      id: "feature2",
      title: "Effortless Secure File Sharing",
      description:
        "With our Secure File Sharing Platform, transfer documents, images, and files with confidence. Robust encryption protects your files, while the platform’s simplicity makes sharing just a few clicks away. Maintain privacy by ensuring only intended recipients access your shared files.",
      features: [
        "Encryption: Protects your files with robust encryption during transfer.",
        "Convenience: Easily share documents, images, and files with just a few clicks.",
        "Privacy: Ensures that only intended recipients can access the shared files.",
      ],
      Icon: AiOutlineFileProtect,
    },
    {
      id: "feature3",
      title: "Customize Your Interface for Productivity",
      description:
        "Our Customizable User Interface Platform lets you tailor your workspace to fit your unique needs. Adjust the dashboard layout, select preferred themes, and enhance productivity with a personalized, user-friendly environment that promotes efficiency.",
      features: [
        "Personalization: Tailor the dashboard to match individual user preferences.",
        "Flexibility: Choose layout options and themes for a unique look and feel.",
        "Enhanced Experience: Create a user-friendly environment that enhances productivity.",
      ],
      Icon: BsSliders2Vertical,
    },
    {
      id: "feature4",
      title: "Comprehensive Cyber Security with Bitss",
      description:
        "Bitss Cyber Security Platform is a powerful protection solution for your digital assets, combining real-time antivirus features with additional captcha security. Bitss WAP and Bitss C work together to provide layered security for websites and web applications. Enjoy ongoing support, regular upgrades, and an advanced spam-blocking contact form.",
      features: [
        "Real-time Antivirus Protection: Includes additional captcha features.",
        "Continuous Support: Offers ongoing support, training, and upgrades.",
        "Spam-Blocking Contact Form: Advanced form protection with built-in spam blocking.",
      ],
      Icon: GoShieldCheck,
    },
  ];

  return (
    <SectionWrapper>
      <h2 className="text-center text-4xl font-medium capitalize md:text-5xl">
        Encrypted email <br /> that ensures personal privacy
      </h2>

      <div className="mt-16 grid grid-cols-12 gap-8">
        {featuresData.map((feat) => (
          <div
            key={feat.id}
            className="group col-span-12 cursor-pointer rounded border border-primary/20 p-6 transition-colors duration-300 hover:bg-primary md:col-span-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-blue-50 p-3">
                <feat.Icon className="text-3xl text-primary" />
              </div>
              <h4 className="text-2xl font-medium text-neutral-900 transition-colors duration-200 group-hover:text-white">
                {feat.title}
              </h4>
            </div>
            <p className="mt-5 pr-1.5 text-neutral-700 transition-colors duration-200 group-hover:text-white">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
