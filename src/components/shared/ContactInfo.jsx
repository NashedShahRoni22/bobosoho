import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div>
      <section className="bg-[#5a3bcc] py-2.5 text-white md:px-5">
        <div className="mx-5 flex justify-between md:container md:mx-auto">
          <div className="flex items-center gap-2.5">
            <FaLocationDot className="text-xl" />8 rue de Dublin, 34200, Sète,
            France.
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <a href="tel:+33666100010" className="flex items-center gap-2.5">
              <BiPhoneCall className="text-xl" />
              <span className="hidden lg:block">+ 33 6 66 10 00 10</span>
            </a>

            <a
              href="mailto:support@bobosohomail.com"
              className="flex items-center gap-2.5"
            >
              <MdEmail className="text-xl" />
              <span className="hidden lg:block">support@bobosohomail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
