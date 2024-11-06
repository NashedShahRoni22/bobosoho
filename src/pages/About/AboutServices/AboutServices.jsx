import ServiceCard from "../../../components/Cards/ServiceCard";
import servicesData from "../../../data/servicesData";

export default function AboutServices() {
  return (
    <section className="bg-gradient-to-b from-[#f7f5ff] via-white to-[#f7f5ff] px-5 py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-neutral-800">
        Our Services <span className="text-electricViolet">at a Glance</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg text-neutral-700">
        We can help you with every step of using Proton for your organization.
        We explain how to set up your employee&apos;s accounts, securely send
        emails, quickly plan events, and more.
      </p>

      <div className="mt-16 grid grid-cols-12 gap-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
