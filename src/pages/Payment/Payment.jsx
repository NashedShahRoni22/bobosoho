import { useState } from "react";
import { useForm } from "react-hook-form";
import StepsHighlight from "../../components/StepsHighlight/StepsHighlight";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";

export default function Payment() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      country: "",
      password:
        "Default password is 'password'. You can change it after login.",
    },
  });

  // Watch input fileds
  const watchStep1 = watch([
    "customerName",
    "businessName",
    "mobile",
    "customerEmail",
    "phone",
    "country",
    "address",
  ]);
  const watchStep2 = watch(["duration", "coupon"]);
  const watchStep3 = watch(["paymentMethod"]);
  const emailStep1 = watch("customerEmail");
  const selectedCurrency = watch("currency");

  // Handle payment form submit
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="px-5 py-10 md:container md:mx-auto md:py-20">
      <h1 className="text-center text-4xl font-semibold">
        Complete Your Purchase
      </h1>
      <p className="mt-5 text-center capitalize">
        <span className="font-medium italic">Please:</span> fill out the below
        form to finalize your purchase
      </p>

      <StepsHighlight step={step} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 w-full max-w-6xl"
      >
        {/* Step 1 */}
        {step === 1 && (
          <Step1
            register={register}
            watchStep1={watchStep1}
            setStep={setStep}
          />
        )}

        {/* Step 2 */}
        {step === 2 && (
          <Step2
            register={register}
            watchStep2={watchStep2}
            emailStep1={emailStep1}
            setValue={setValue}
            selectedCurrency={selectedCurrency}
            setStep={setStep}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <Step3
            register={register}
            watchStep3={watchStep3}
            setStep={setStep}
          />
        )}
      </form>
    </main>
  );
}
