import banner2 from "../assets/businessbanner1.png";
import banner3 from "../assets/businessbanner2.png";
import banner4 from "../assets/businessbanner3.png";

const featuresData = [
  {
    title: "Business Email Security",
    description:
      "Ensure your communication is always protected with industry-leading encryption and anti-spam measures.",
    benefits: [
      " Privacy: Safeguard sensitive data with robust privacy controls and secure login options.",
      "Spam Protection: Block unwanted messages with advanced anti-spam filters.",
      "Data Security: Keep your emails confidential with encrypted transmission and storage.",
    ],
    image: banner2,
  },
  {
    title: "Customizable Features",
    description:
      "Personalize your business email experience to fit your needs and preferences.",
    benefits: [
      "Dashboard Customization: Modify the layout, color schemes, and settings for a tailored look.",
      "Flexible Setup: Choose how you manage emails, folders, and notifications.",
      "User Preferences: Adapt the interface to improve usability and productivity.",
    ],
    image: banner3,
  },
  {
    title: "Effortless User Experience",
    description:
      "Designed for simplicity and efficiency, our platform makes email management easy.",
    benefits: [
      "Intuitive Design: Navigate through your emails effortlessly with a user-friendly interface.",
      "Mobile and Desktop Sync: Access your email anytime, anywhere, with seamless synchronization across devices.",
      "Productivity Boost: Streamline your communication with tools that enhance workflow and organization.",
    ],
    image: banner4,
  },
];

const BussinessFeature = () => {
  return (
    <section className="px-5 md:container md:mx-auto">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="py-10 min-h-screen h-auto flex flex-col items-center gap-10 lg:py-20 lg:flex-row lg:justify-between"
        >
          {/* Alternate layout based on the index for large devices */}
          <div
            className={`lg:w-1/2 flex justify-center  bg-center bg-no-repeat bg-cover bg-origin-border  ${
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
            <h1 className="text-2xl lg:text-4xl leading-normal font-semibold">
              {feature.title} <span className="text-blue-500">Platform</span>
            </h1>
            <p className=" my-6 text-gray-700">{feature.description}</p>
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

export default BussinessFeature;
