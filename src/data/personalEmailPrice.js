import { AiOutlineDashboard } from "react-icons/ai";
import { BsFilePdf } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { HiOutlineLanguage } from "react-icons/hi2";
import {
  MdOutlineBlock,
  MdOutlineMailLock,
  MdOutlineNotifications,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { PiDevicesLight, PiUserLight, PiUsersLight } from "react-icons/pi";
import { RiSpamLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { TiCloudStorageOutline } from "react-icons/ti";

export const personalEmailPrice = [
  {
    title: "Bobosoho Private Email, Call & Chat Share",
    price: 2,
    type: {
      Icon: CiUser,
      name: "For Personal User",
    },
    highlightedFeat: [
      {
        Icon: MdOutlineMailLock,
        name: "Private Email",
      },
      {
        Icon: HiOutlineLanguage,
        name: "Multi Language",
      },
    ],
    features: [
      {
        Icon: AiOutlineDashboard,
        name: "Pensaki Blackboard Unique Dashboard",
      },
      {
        Icon: PiUserLight,
        name: "Single Private User",
      },
      {
        Icon: MdOutlineMailLock,
        name: "Private Account",
      },
      {
        Icon: TfiWrite,
        name: "DOC Writer",
      },
      {
        Icon: FiBook,
        name: "Assignment Writer",
      },
      {
        Icon: BsFilePdf,
        name: "PDF Converter",
      },
      {
        Icon: TiCloudStorageOutline,
        name: "Private Vault, Cloud Space for Photos, Videos & Docs",
      },
      {
        Icon: MdOutlineBlock,
        name: "No Advertisement",
      },
      {
        Icon: RiSpamLine,
        name: "Anti Spam Security",
      },
      {
        Icon: MdOutlinePrivacyTip,
        name: "Total Privacy Gurantee",
      },
    ],
  },
  {
    title: "Bobosoho Private Email, Call & Chat Share",
    price: 9.5,
    type: {
      Icon: PiUsersLight,
      name: "For Family or Friends",
    },
    highlightedFeat: [
      {
        Icon: MdOutlineMailLock,
        name: "Private Email",
      },
      {
        Icon: HiOutlineLanguage,
        name: "Multi Language",
      },
      {
        Icon: TiCloudStorageOutline,
        name: "Cloud Storage",
      },
    ],
    features: [
      {
        Icon: AiOutlineDashboard,
        name: "Pensaki Blackboard Unique Dashboard Per User",
      },
      {
        Icon: PiUsersLight,
        name: "Up to 30 Private User",
      },
      {
        Icon: MdOutlineMailLock,
        name: "Private Account",
      },
      {
        Icon: TfiWrite,
        name: "DOC Writer",
      },
      {
        Icon: FiBook,
        name: "Assignment Writer",
      },
      {
        Icon: BsFilePdf,
        name: "PDF Converter",
      },
      {
        Icon: MdOutlineNotifications,
        name: "Email Delivery Notification",
      },
      {
        Icon: TiCloudStorageOutline,
        name: "Private Vault, Cloud Space for Photos, Videos & Docs",
      },
      {
        Icon: MdOutlineBlock,
        name: "No Advertisement",
      },
      {
        Icon: RiSpamLine,
        name: "Anti Spam Security",
      },
      {
        Icon: PiDevicesLight,
        name: "Unlimited Device Support",
      },
    ],
    note: "Choose any 3 optional features below to take your Business to the Next Level!",
    otherProducts: [
      {
        name: "Pensaki",
      },
      {
        name: "Omada Project Manager"
      },
      {
        name: "Clasico Payslips"
      },
      {
        name: "Ifgaap Mobile Invoicing"
      },
      {
        name: "Ifgaap Accounting"
      },
      {
        name: "E-commerce website (Hosting charges extra)"
      },
    ],
  },
];
