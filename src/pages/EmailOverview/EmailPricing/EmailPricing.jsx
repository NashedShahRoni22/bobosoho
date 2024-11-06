import { AiOutlineDashboard } from "react-icons/ai";
import { BsFilePdf } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { HiOutlineLanguage } from "react-icons/hi2";
import {
  MdOutlineBlock,
  MdOutlineMailLock,
  MdOutlineNotifications,
} from "react-icons/md";
import {
  PiCalendarDotsThin,
  PiDevicesLight,
  PiUsersLight,
} from "react-icons/pi";
import { RiSpamLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { TiCloudStorageOutline } from "react-icons/ti";
import SectionWrapper from "../../../components/shared/SectionWrapper";
import PricingCard from "../../../components/PricingCard";
import useIsPersonal from "../../../hooks/useIsPersonal";

const personalPricing = [
  {
    title: "Mail Essentials",
    price: "€ 3.00",
    purchaseLink: "/business",
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
        Icon: PiCalendarDotsThin,
        name: "Project Planner",
      },
      {
        Icon: RiSpamLine,
        name: "Anti Spam Security",
      },
      {
        Icon: MdOutlineBlock,
        name: "No Advertisement",
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
    title: "Mail Professional",
    price: "€ 9.50",
    purchaseLink: "/business",
    type: {
      Icon: PiUsersLight,
      name: "For Teams",
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
        Icon: GiSettingsKnobs,
        name: "All Features of Most Essentials",
      },
      {
        Icon: AiOutlineDashboard,
        name: "Unique Dashboard Per User",
      },
      {
        Icon: PiUsersLight,
        name: "Up to 30 Private User",
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
        Icon: TiCloudStorageOutline,
        name: "Cloud Space for Photos, Videos & DOCS",
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

const businessPricing = [
  {
    title: "Business Essentials",
    price: "€ 6.00",
    purchaseLink: "/business",
    type: {
      Icon: CiUser,
      name: "For Business User",
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
        Icon: AiOutlineDashboard,
        name: "Master Admin Dashboard",
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
        Icon: PiCalendarDotsThin,
        name: "Project Planner",
      },
      {
        Icon: RiSpamLine,
        name: "Anti Spam Security",
      },
      {
        Icon: MdOutlineBlock,
        name: "No Advertisement",
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
    title: "Business Professional",
    price: "€ 39.50",
    purchaseLink: "/business",
    type: {
      Icon: PiUsersLight,
      name: "For Professional User",
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
        Icon: GiSettingsKnobs,
        name: "All Features of Business Essentials",
      },
      {
        Icon: AiOutlineDashboard,
        name: "Unique Dashboard Per User",
      },
      {
        Icon: PiUsersLight,
        name: "Up to 100 Private User",
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
        Icon: TiCloudStorageOutline,
        name: "Cloud Space for Photos, Videos & DOCS",
      },
      {
        Icon: PiDevicesLight,
        name: "Unlimited Device Support",
      },
      {
        Icon: RiSpamLine,
        name: "Anti Spam Security",
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

export default function EmailPricing() {
  const personalUser = useIsPersonal();

  return (
    <div className="min-h-screen w-full bg-[#1b1340] text-white">
      <SectionWrapper>
        <h2 className="text-center text-4xl font-medium capitalize md:text-5xl">
          Choose a plan & start protecting <br /> your{" "}
          {personalUser ? "Personal" : "Business"} data
        </h2>

        <div className="mx-auto mt-20 grid w-full max-w-4xl grid-cols-12 items-center justify-center gap-16">
          {(personalUser ? personalPricing : businessPricing).map(
            (details, i) => (
              <PricingCard key={i} details={details} />
            ),
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
