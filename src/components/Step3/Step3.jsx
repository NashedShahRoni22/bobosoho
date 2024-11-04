import { MdKeyboardArrowLeft } from "react-icons/md";
import paypalIcon from "../../assets/icons/paypal.svg";
import stripeIcon from "../../assets/icons/stripe-s.svg";
import bankIcon from "../../assets/icons/bank.svg";
import keyIcon from "../../assets/icons/key.svg";

export default function Step3({ register, watchStep3, setStep }) {
  return (
    <>
      <div className="my-8 space-y-4">
        <label
          htmlFor="paypal"
          className="flex gap-8 rounded-lg border px-6 py-4 text-neutral-600"
        >
          <div>
            <img src={paypalIcon} alt="paypal icon" className="mx-auto w-16" />
            <p className="text-center text-sm font-medium">Paypal</p>
          </div>
          <div className="flex flex-1 flex-col justify-between py-1.5">
            <p className="text-lg font-medium">XXXX XXXX XXXX 8908</p>
            <p className="font-medium italic">09/27</p>
          </div>
          <div className="flex flex-col justify-center">
            <input
              type="radio"
              id="paypal"
              value="paypal"
              {...register("paymentMethod", { required: true })}
              className="size-5"
            />
          </div>
        </label>

        <label
          htmlFor="stripe"
          className="flex gap-11 rounded-lg border px-6 py-4 text-neutral-600"
        >
          <div>
            <img src={stripeIcon} alt="stripe icon" className="mx-auto w-12" />
            <p className="mt-1.5 text-center text-sm font-medium">Stripe</p>
          </div>
          <div className="flex flex-1 flex-col justify-between py-1.5">
            <p className="text-lg font-medium">XXXX XXXX XXXX 7777</p>
            <p className="font-medium italic">01/26</p>
          </div>
          <div className="flex flex-col justify-center">
            <input
              type="radio"
              id="stripe"
              value="stripe"
              {...register("paymentMethod", { required: true })}
              className="size-5"
            />
          </div>
        </label>

        <label
          htmlFor="bank"
          className="flex gap-9 rounded-lg border px-6 py-4 text-neutral-600"
        >
          <div>
            <img src={bankIcon} alt="bank icon" className="mx-auto w-14" />
            <p className="mt-1.5 text-center text-sm font-medium">Bank</p>
          </div>
          <div className="flex flex-1 flex-col justify-between py-1.5">
            <p className="text-lg font-medium">XXXX XXXX XXXX 6498</p>
            <p className="font-medium italic">01/24</p>
          </div>
          <div className="flex flex-col justify-center">
            <input
              type="radio"
              id="bank"
              value="bank"
              {...register("paymentMethod", { required: true })}
              className="size-5"
            />
          </div>
        </label>

        <label
          htmlFor="license-key"
          className="flex gap-9 rounded-lg border px-6 py-4 text-neutral-600"
        >
          <div>
            <img src={keyIcon} alt="key icon" className="mx-auto w-12" />
            <p className="mt-1.5 text-center text-sm font-medium">Key</p>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-lg font-medium">
              License Key Product Activation
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <input
              type="radio"
              id="license-key"
              value="license-key"
              {...register("paymentMethod", { required: true })}
              className="size-5"
            />
          </div>
        </label>
      </div>

      {/* Form Step Changing Buttons */}
      <div className="mt-12 flex justify-center gap-12">
        <button
          className="flex items-center gap-1 text-lg font-semibold text-primary transition-all duration-200 ease-in-out"
          onClick={() => setStep(2)}
        >
          <MdKeyboardArrowLeft className="mt-0.5 text-2xl" />
          Back
        </button>

        <button
          className={`rounded border px-6 py-1.5 text-lg font-semibold ${
            watchStep3.every(Boolean)
              ? "border-primary bg-primary text-white"
              : "border-primary/40 bg-white text-gray-400"
          }`}
          type="submit"
          disabled={!watchStep3.every(Boolean)}
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
}
