import { AiOutlineDashboard } from "react-icons/ai";
import { BsFilePdf } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { HiOutlineLanguage } from "react-icons/hi2";
import {
  MdOutlineBlock,
  MdOutlineMailLock,
  MdOutlineNotifications,
} from "react-icons/md";
import { PiDevicesLight, PiUserLight, PiUsersLight } from "react-icons/pi";
import { RiSpamLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { TiCloudStorageOutline } from "react-icons/ti";

export const personalEmailPrice = [
  {
    title: "Private Email, Call & Chat Share",
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
        name: "Unique Dashboard",
      },
      {
        Icon: PiUserLight,
        name: "Single Private User",
      },
      {
        Icon: MdOutlineNotifications,
        name: "Email Delivery Notification",
      },
      {
        Icon: HiOutlineLanguage,
        name: "Multi Language",
      },
      {
        Icon: MdOutlineMailLock,
        name: "Private Account",
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
    ],
    note: "Bobosoho email is free, if you purchase any products from",
    otherProducts: [
      {
        name: "BFIN IT",
        link: "/business",
      },
    ],
  },
  {
    title: "Private Email, Call & Chat Share",
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
        name: "Unique Dashboard Per User",
      },
      {
        Icon: PiUsersLight,
        name: "Up to 30 Private User",
      },
      {
        Icon: MdOutlineNotifications,
        name: "Email Delivery Notification",
      },
      {
        Icon: HiOutlineLanguage,
        name: "Multi Language",
      },
      {
        Icon: MdOutlineMailLock,
        name: "Private Account",
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
        Icon: TfiWrite,
        name: "DOC Writer",
      },
      {
        Icon: BsFilePdf,
        name: "PDF Converter",
      },
      {
        Icon: PiDevicesLight,
        name: "Unlimited Device Support",
      },
    ],
    note: "Bobosoho email is free, if you purchase any products like",
    otherProducts: [
      {
        name: "Pensaki",
        link: "/business",
      },
      {
        name: "Omada-Clasico",
        link: "/business",
      },
      {
        name: "Hosting-Products",
        link: "/business",
      },
    ],
  },
];
