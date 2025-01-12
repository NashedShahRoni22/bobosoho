import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function PricingCard({ details }) {
  const {
    title,
    price,
    type,
    highlightedFeat,
    features,
    note,
    otherProducts,
    user,
    packageName,
  } = details;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgb(64, 57, 95) 0%, rgb(27, 19, 64) 100%)",
      }}
      className="col-span-12 h-full rounded border px-4 py-10 md:col-span-6"
    >
      <div className="flex justify-center gap-1.5 text-neutral-400">
        <type.Icon className="text-2xl" />
        <p className="mt-1">{type.name}</p>
      </div>
      <p className="mb-4 mt-4 text-center text-3xl font-medium">{title}</p>

      {/* highlighted features */}
      <div className="flex items-center justify-center gap-3 text-neutral-400">
        {highlightedFeat.map((feat, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <feat.Icon className="text-2xl" />
            <small>{feat.name}</small>
          </div>
        ))}
      </div>

      <p className="mb-4 mt-6 text-center text-sm">
        <span className="text-3xl font-medium">{`€ ${price.toFixed(2)}`}</span>{" "}
        /year
      </p>

      <Link
        to={`https://www.bobosohomail.com/email_ins/signUp_email.php?registration_from=1&user=${user}&package=${packageName}&price=${price}`}
        target="_blanck"
        className="group flex items-center justify-center rounded-full border px-5 py-3 hover:border-electricViolet md:px-5 lg:text-xl"
      >
        <span className="flex items-center px-3">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            Get Started
          </span>
        </span>
        <FaArrowRight className="-ml-3 text-electricViolet opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* features details */}
      <div className="mt-4 space-y-3.5">
        <p className="font-semibold">Get these Extras with Bobosoho :</p>
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-white">
            <feat.Icon className="text-2xl text-neutral-400" />
            {feat.name}
          </div>
        ))}
      </div>

      {note && otherProducts && (
        <>
          <div className="mb-6 mt-12 h-[0.5px] w-full bg-neutral-500"></div>

          <p className="text-sm">{note}:</p>
          <div className="mt-3 flex flex-col gap-1.5 text-xs">
            {otherProducts.map((product, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  id={product.name}
                  value={product.name}
                  className="size-3.5"
                />{" "}
                <label htmlFor={product.name}>{product.name}</label>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
