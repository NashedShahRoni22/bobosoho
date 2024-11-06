import { CiLock } from "react-icons/ci";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsSliders2Vertical } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";

const businessEmailFeat = [
  {
    id: "feature1",
    title: "Secure Business Email with Advanced Encryption",
    description:
      "Protect your business communications with our secure email platform, featuring robust privacy controls, advanced spam filters, and encrypted data transmission and storage for complete confidentiality and peace of mind.",
    features: [
      "Privacy Protection: Ensures only sender and recipient can access messages.",
      "Security: Safeguards data from interception and tampering.",
      "User Trust: Builds confidence through regulatory compliance and strong data protection.",
    ],
    Icon: CiLock,
  },
  {
    id: "feature2",
    title: "Customizable Email for Your Business",
    description:
      "Tailor your business email experience with customizable dashboards, flexible setups, and user preferences, designed to enhance usability, improve productivity, and match your unique needs.",
    features: [
      "Encryption: Protects your files with robust encryption during transfer.",
      "Convenience: Easily share documents, images, and files with just a few clicks.",
      "Privacy: Ensures that only intended recipients can access the shared files.",
    ],
    Icon: AiOutlineFileProtect,
  },
  {
    id: "feature3",
    title: "Simplify Your Email Experience",
    description:
      "Enjoy seamless email management with an intuitive design, syncing across mobile and desktop devices. Boost productivity with tools that streamline communication, improve organization, and enhance your overall workflow, making email handling effortless.",
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

export default businessEmailFeat;
