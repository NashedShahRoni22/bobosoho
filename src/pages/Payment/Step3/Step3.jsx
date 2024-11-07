import { MdKeyboardArrowLeft } from "react-icons/md";
import paypalIcon from "../../../assets/icons/paypal.svg";
import stripeIcon from "../../../assets/icons/stripe-s.svg";
import bankIcon from "../../../assets/icons/bank.svg";
import keyIcon from "../../../assets/icons/key.svg";

export default function Step3({ register, watchStep3, setStep }) {
  const paymentMethod = watchStep3[0];
  const isPaymentBank = paymentMethod === "bank";

  const isFormValid = () => {
    if (!paymentMethod) {
      return false;
    }

    if (isPaymentBank) {
      return watchStep3.every(Boolean);
    }

    return true;
  };

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
      </div>

      {/* Show Bank Form if user select payment via Bank */}
      {isPaymentBank && (
        <>
          <h2 className="mb-16 mt-20 text-center text-3xl">
            Please Fill up Bank Info Form
          </h2>
          <div className="my-8 grid grid-cols-12 gap-y-6 md:gap-x-12">
            <div className="col-span-12 grid grid-cols-12 gap-y-6 md:col-span-8 md:gap-x-12">
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="bankName">Bank Name *</label>
                <input
                  type="text"
                  id="bankName"
                  {...register("bankName", { required: isPaymentBank })}
                  className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
                />
              </div>

              <div className="col-span-12 md:col-span-6">
                <label htmlFor="cardNum">Card Number *</label>
                <input
                  type="text"
                  id="cardNum"
                  {...register("cardNum", { required: isPaymentBank })}
                  className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
                />
              </div>

              <div className="col-span-12 md:col-span-6">
                <label htmlFor="cardName">Card Holder Name *</label>
                <input
                  type="text"
                  id="cardName"
                  {...register("cardName", { required: isPaymentBank })}
                  className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
                />
              </div>

              <div className="col-span-12 md:col-span-6">
                <label htmlFor="cvv">CVV *</label>
                <input
                  type="text"
                  id="cvv"
                  {...register("cvv", { required: isPaymentBank })}
                  className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="col-span-12 flex flex-col justify-between gap-2.5 rounded-lg border border-primary/50 bg-[#ECF3FE] px-4 py-4 md:col-span-4">
              <p className="mb-4 text-center text-xl font-semibold">
                Our Bank Transfer Details
              </p>
              <p>
                <span className="font-semibold">Bank:</span> LCL Bank France
              </p>
              <p>
                <span className="font-semibold">IBAN:</span> FR62 3000 2030 3700
                0007 3125 M63
              </p>
              <p>
                <span className="font-semibold">BIC:</span> CRLYFRPP
              </p>
            </div>

            <div className="col-span-12 mt-6">
              <p className="text-sm text-neutral-600">
                <span className="font-bold text-red-600">*</span> Make your
                payment directly into the BFIN SASU bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped electronically until the funds have cleared in our
                account.
              </p>
              <br />
              <p className="text-sm text-neutral-600">
                <span className="font-bold text-red-600">*</span> Bank Transfer
                payments are made to BFIN SASU Reg no 53521773100012 RCS
                Montpellier France registration office address 8 RUE DUBLIN
                34200 SETE FRANCE. All deliveries and returns to this electronic
                address support@boboshomail.com. Bobosoho by BFIN.
                www.officetools.bobosoho.com is managed by BFIN group. After
                verifying your payment the product will be activated within 24H.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Form Step Changing Buttons */}
      <div className="mt-12 flex justify-center gap-12">
        <button
          className="flex items-center gap-1 text-lg font-semibold text-electricViolet transition-all duration-200 ease-in-out"
          onClick={() => setStep(2)}
        >
          <MdKeyboardArrowLeft className="mt-0.5 text-2xl" />
          Back
        </button>

        <button
          className={`rounded border px-6 py-1.5 text-lg font-semibold ${
            isFormValid()
              ? "border-electricViolet bg-electricViolet text-white"
              : "border-electricViolet/50 bg-white text-neutral-500"
          }`}
          type="submit"
          disabled={!isFormValid()}
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
}
