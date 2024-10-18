import React from "react";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

const featuresData = [
  {
    title: "Most Efficient Email Management",
    description: "Our email interface is designed to help you stay organized and manage your messages effortlessly. With a clean sidebar for easy access to folders like Inbox, Drafts, Sent, Junk, and Trash, along with your personal labels like crypto, documents, and projects, your important emails are always just a click away.",
    benefits: [
      "Smart Search: Quickly find the emails you need using the built-in search bar.",
      "Real-Time Updates: Keep track of new messages with real-time notifications and an intuitive inbox layout.",
      "Seamless Navigation: Switch between contacts, settings, and other features using the sidebar, making email management a breeze."
    ],
    image: banner2,
  },
  {
    title: "Advanced Collaboration Tools",
    description: "Enhance teamwork with our advanced collaboration features, enabling smooth communication and document sharing among team members.",
    benefits: [
      "Instant Messaging: Communicate instantly with your team without leaving the platform.",
      "File Sharing: Share documents securely and efficiently with just a few clicks.",
      "Task Management: Assign and track tasks to ensure everyone is on the same page."
    ],
    image: banner3,
  },
  {
    title: "The Most Secure Email Connecting",
    description: "Ensure the highest level of security for your communication with our advanced protection features, giving you peace of mind.",
    benefits: [
      "Data Encryption: Safeguard your emails with end-to-end encryption for ultimate privacy.",
      "Secure Access: Control who accesses your emails with multi-factor authentication.",
      "Threat Detection: Detect and block unauthorized access attempts with real-time monitoring."
    ],
    image: banner4,
  },
];

export default function Features() {
  return (
    <section>
      {featuresData.map((feature, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center lg:justify-between p-10 lg:p-20 h-auto lg:h-[100vh] lg:mt-0">
          {/* Alternate layout based on the index for large devices */}
          <div className={`lg:w-1/2 flex justify-center bg-[url('./assets/creative-rounded.png')] bg-center bg-no-repeat bg-cover bg-origin-border bg-auto ${index % 2 === 0 ? "order-1" : "order-2"} mt-10 lg:mt-0`}>
            <img src={feature.image} alt={`${feature.title} Example`} className="w-full h-auto max-w-lg" />
          </div>

          <div className={`lg:w-1/2 text-center lg:text-left ${index % 2 === 0 ? "order-2" : "order-1"}`}>
            <h1 style={{ lineHeight: "74px" }} className="text-3xl lg:text-5xl font-bold mb-6">
              {feature.title}{" "}
              <span className="text-blue-500">Platform</span>
            </h1>
            <p style={{ lineHeight: "35px" }} className="text-lg lg:text-xl mb-6 text-gray-700">
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