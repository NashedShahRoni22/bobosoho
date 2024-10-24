import Lottie from "react-lottie";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import contactAnim from "../assets/lotties/contact-anim.json";

const Contact = () => {
  // lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="mx-5 md:container md:mx-auto">
      <div className="py-10 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-semibold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-96">
            To make requests for further information, contact us via our social
            channels.
          </p>

          <div className="mt-8 flex items-center gap-5 text-gray-700">
            <div className="p-5 bg-gray-100 rounded-xl">
              <FaHome className="text-4xl text-primary md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-xl">Address</h5>
              <p>8 rue de Dublin, 34200, Sète, France</p>
            </div>
          </div>

          <div className="flex items-center gap-5 my-5 text-gray-700">
            <div className="p-5 bg-gray-100 rounded-xl">
              <FaPhone className="text-4xl text-primary md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-xl">Phone</h5>
              <p>+0033666100010</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-gray-700">
            <div className="p-5 bg-gray-100 rounded-xl">
              <MdMarkEmailRead className="text-4xl text-primary md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-xl">Email</h5>
              <p>support@bobosohomail.com</p>
              <p>bfin@bobosohomail.com</p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2">
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
