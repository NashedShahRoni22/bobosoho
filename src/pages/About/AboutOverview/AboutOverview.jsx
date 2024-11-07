import about1Img from "../../../assets/about.webp";
import about2Img from "../../../assets/about-2.webp";

export default function AboutOverview() {
  return (
    <section className="bg-[#f8f6ff] py-10 md:py-20">
      <div className="flex w-full flex-col items-center md:mx-auto md:max-w-[1536px] md:flex-row">
        <div className="mb-8 px-5 md:mt-0 md:w-1/2 md:px-0">
          <img src={about1Img} alt="" />
        </div>
        <div className="px-5 md:w-1/2 md:pl-16 md:pr-0">
          <h2 className="text-4xl text-neutral-800">
            Built to Simplify Payroll for Every Business
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-neutral-700">
            Bobosoho was founded to simplify payroll management, providing
            secure, efficient tools for businesses of all sizes. Our mission is
            to empower organizations with streamlined payroll solutions that
            save time and resources, ensuring accuracy and ease every step of
            the way.
          </p>
        </div>
      </div>
      <div className="mt-24 flex w-full flex-col items-center md:mx-auto md:max-w-[1536px] md:flex-row">
        <div className="px-5 md:w-1/2 md:px-16">
          <h2 className="text-4xl text-neutral-800">
            Designed for Modern Businesses, Built to Simplify Payroll
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-neutral-700">
            Bobosoho was created as a solution for companies seeking more than
            just payroll software. We envisioned a world where businesses,
            regardless of size, could easily handle payroll with full control,
            security, and flexibility—free from the limitations of complex,
            outdated systems.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-neutral-700">
            In this vision, businesses can process payroll confidently, protect
            employee data, ensure compliance without hassle, and stay ahead in a
            rapidly evolving digital landscape.
          </p>
        </div>
        <div className="mt-8 px-5 md:mt-0 md:w-1/2 md:px-0">
          <img src={about2Img} alt="" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}
