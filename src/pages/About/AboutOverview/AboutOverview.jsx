import { overviewSecData } from "../../../data/overviewSecData";

export default function AboutOverview() {
  return (
    <section className="space-y-16 bg-[#f8f6ff] py-10 md:py-20">
      {overviewSecData.map((data, i) => (
        <div
          key={i}
          className="flex w-full flex-col items-center md:mx-auto md:max-w-[1536px] md:flex-row"
        >
          <div
            className={`mb-8 w-full px-5 md:mt-0 md:w-1/2 md:px-0 ${
              i % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <img
              src={data.img}
              alt=""
              className="h-[390px] w-full object-contain md:h-auto"
            />
          </div>
          <div
            className={`px-5 md:w-1/2 md:pl-16 md:pr-0 ${
              i % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <h2 className="text-4xl text-neutral-800">{data.title}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-neutral-700">
              {data.details}
            </p>
            {data.details2 && (
              <p className="mt-6 max-w-xl leading-relaxed text-neutral-700">
                {data.details2}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
