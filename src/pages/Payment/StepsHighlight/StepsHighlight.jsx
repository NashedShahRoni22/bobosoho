export default function StepsHighlight({ step }) {
  return (
    <>
      {/* Highlighted Form Steps */}
      <div className="mx-auto mt-16 flex w-[85%] max-w-3xl justify-between">
        <div className="flex size-12 items-center justify-center rounded-full bg-electricViolet md:size-10">
          <div className="size-6 rounded-full bg-white md:size-5"></div>
        </div>

        <div
          className={`mt-5 h-0.5 w-full flex-1 ${
            step >= 2 ? "bg-electricViolet" : "bg-gray-200"
          }`}
        ></div>

        <div
          className={`flex size-12 items-center justify-center rounded-full border md:size-10 ${
            step >= 2
              ? "border-electricViole bg-electricViolet"
              : "border-gray-200"
          }`}
        >
          <div
            className={`size-6 rounded-full md:size-5 ${
              step >= 2 ? "bg-white" : "bg-gray-300"
            }`}
          ></div>
        </div>

        <div
          className={`mt-5 h-0.5 w-full flex-1 ${
            step >= 3 ? "bg-electricViolet" : "bg-gray-200"
          }`}
        ></div>

        <div
          className={`flex size-12 items-center justify-center rounded-full border md:size-10 ${
            step >= 3
              ? "border-electricViole bg-electricViolet"
              : "border-gray-200"
          }`}
        >
          <div
            className={`size-6 rounded-full md:size-5 ${
              step >= 3 ? "bg-white" : "bg-gray-300"
            }`}
          ></div>
        </div>
      </div>

      <div className="mx-auto mb-20 mt-4 flex w-full max-w-[900px] justify-between">
        <div className="text-center sm:ml-7">
          <p className="text-xl font-medium text-primary">Personal</p>
          <p className="text-sm font-medium text-gray-600">Basic Information</p>
        </div>

        <div className="ml-10 text-center sm:ml-8">
          <p className={`text-xl font-medium ${step >= 2 && "text-primary"}`}>
            Pricing
          </p>
          <p className="text-sm font-medium text-gray-600">Pricing Details</p>
        </div>

        <div className="text-center">
          <p className={`text-xl font-medium ${step >= 3 && "text-primary"}`}>
            Checkout
          </p>
          <p className="text-sm font-medium text-gray-600">
            Choose Payment Method
          </p>
        </div>
      </div>
    </>
  );
}
