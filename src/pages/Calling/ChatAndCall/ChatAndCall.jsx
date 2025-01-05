import { chatAndCallData } from "../../../data/chatAndCallData";

export default function ChatAndCall() {
  return (
    <section>
      {chatAndCallData.map((data, i) => (
        <div
          key={i}
          className="flex w-full flex-col items-center py-10 md:container md:mx-auto md:flex-row md:py-20"
        >
          <div
            className={`mb-8 w-full px-5 md:mt-0 md:w-1/2 md:px-0 ${
              i % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <img
              src={data.img}
              alt=""
              className={`h-[390px] w-full rounded-2xl object-cover md:rounded-none lg:h-[27rem] ${i % 2 === 0 ? "md:rounded-r-2xl" : "md:rounded-l-2xl"}`}
            />
          </div>
          <div
            className={`px-5 md:w-1/2 md:pr-0 ${
              i % 2 === 0
                ? "md:order-2 md:pl-16 md:pr-5"
                : "md:order-1 md:pr-16"
            }`}
          >
            <h2 className="max-w-96 text-4xl text-neutral-800">{data.title}</h2>
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
