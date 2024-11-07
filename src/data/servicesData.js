import {
  PiChatsCircleLight,
  PiFolderOpenLight,
  PiGlobeThin,
  PiShieldCheck,
  PiCloudCheckLight,
} from "react-icons/pi";
import { LiaSlideshare } from "react-icons/lia";

const servicesData = [
  {
    id: 1,
    title: "Effortless Communication",
    description:
      "Simplify email communication, socializing, and sharing photos, videos, and documents in a secure environment, accessible across all networks.",
    Icon: PiChatsCircleLight,
  },
  {
    id: 2,
    title: "Seamless & Secure Connections",
    description:
      "Connect with people effortlessly while upholding the highest security standards, making collaboration and sharing safe and easy.",
    Icon: PiShieldCheck,
  },
  {
    id: 3,
    title: "Instant Messaging & Grouping",
    description:
      "Instantly message or create contact groups to send emails to multiple recipients at once, enhancing connectivity and coordination.",
    Icon: LiaSlideshare,
  },
  {
    id: 4,
    title: "Secure Collaboration & Sharing",
    description:
      "Share moments, ideas, and collaborate securely with Bobosoho Email, a social platform designed with a user-friendly interface for easy sharing.",
    Icon: PiCloudCheckLight,
  },
  {
    id: 5,
    title: "Efficient Organization",
    description:
      "Organize memories and documents effortlessly with our efficient folder management system, keeping everything easily accessible.",
    Icon: PiFolderOpenLight,
  },
  {
    id: 6,
    title: "Effortless Connectivity",
    description:
      "Stay connected using group features, sharing updates and coordinating plans effortlessly with family and friends.",
    Icon: PiGlobeThin,
  },
];

export default servicesData;
