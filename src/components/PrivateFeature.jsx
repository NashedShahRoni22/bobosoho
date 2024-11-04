import banner2 from "../assets/privatebanner1.png";
import banner3 from "../assets/privatebanner2.png";
import banner4 from "../assets/privatebanner3.png";
import banner5 from "../assets/privatebanner4.png";

const featuresData = [
  {
    title: "End-to-End Encryption Email",
    description:
      " Ensures that all messages and shared files are encrypted during transmission, enhancing security.",
    benefits: [
      "Privacy Protection: Ensures only sender and recipient can access messages.",
      "Security: Safeguards data from interception and tampering.",
      "User Trust: Builds confidence through regulatory compliance and strong data protection.",
    ],
    image: banner2,
  },
  {
    title: "Secure File Sharing",
    description:
      "Share documents, images, and files with encrypted file transfer protocols.",
    benefits: [
      "Encryption: Protects your files with robust encryption during transfer.",
      "Convenience: Easily share documents, images, and files with just a few clicks.",
      "Privacy: Ensures that only intended recipients can access the shared files.",
    ],
    image: banner3,
  },
  {
    title: "Customizable User Interface",
    description:
      "Personalize the dashboard according to user preferences, offering a tailored experience.",
    benefits: [
      "Personalization: Tailor the dashboard to match individual user preferences.",
      "Flexibility: Choose layout options and themes for a unique look and feel.",
      "Enhanced Experience: Create a user-friendly environment that enhances productivity.",
    ],
    image: banner4,
  },
  {
    title: "Bitss Cyber Security",
    description:
      "Bitss is a comprehensive website protection system designed to safeguard your online assets from various security threats. It operates on two mre components—Bitss WAP (Web Protection) and Bitss C (Cloud-based Protection)—ensuring multiple layers of security for websites and web applications.",
    benefits: [
      "Bitss Real-time antivirus protection With additional math captcha features.",
      "Bitss gives continue Support, Training, Upgrade.",
      "Advanced website contact form with built-in spam blocking",
    ],
    image: banner5,
  },
];

const PrivateFeature = () => {
  return (
    <section className="px-5 md:container md:mx-auto">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="py-10 min-h-screen h-full flex flex-col items-center gap-10 lg:py-20 lg:flex-row lg:justify-between"
        >
          {/* Alternate layout based on the index for large devices */}
          <div
            className={`lg:w-1/2 flex justify-center bg-origin-border ${
              index % 2 === 0 ? "order-1" : "order-2"
            } mt-10 lg:mt-0`}
          >
            <img
              src={feature.image}
              alt={`${feature.title} Example`}
              className="w-full h-auto max-w-lg"
            />
          </div>

          <div
            className={`lg:w-1/2 text-center lg:text-left ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <h1 className="text-3xl lg:text-5xl leading-normal font-semibold">
              {feature.title} <span className="text-blue-500">Platform</span>
            </h1>
            <p className="my-5 text-gray-700">{feature.description}</p>
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
};

export default PrivateFeature;
