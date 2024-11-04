const savePaymentData = (data) => {
  const paymentData = { ...data, currency: "EUR" };
  localStorage.setItem("paymentData", JSON.stringify(paymentData));
};

export default savePaymentData;
