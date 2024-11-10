const Security = () => {
  const Security = [
    {
      para: "Bobosoho Security is a robust email platform designed for individuals to engage in discussions, share multimedia content, and express their opinions freely. Our platform enables users to communicate via email, voice, and video, and even facilitates selling products through video presentations.",
    },
    {
      para: "As part of our commitment to maintaining a secure platform, members are required to undergo facial verification. This process helps us verify the identity of users and prevent unauthorized access to accounts. During registration or certain account activities, members will be prompted to go through facial recognition verification.",
    },
    {
      para: "At Bobosoho, we prioritize the safety and well-being of our community members. Therefore, we maintain a zero-tolerance policy towards any form of inappropriate behavior, including pedophilia, sexual content, bullying, intimidation, or any activity that violates the rights of minors or adults. To ensure a secure environment, we may request verification of identity during the membership process. This verification process may involve providing personal identification documents, such as an identity card, and for certain exceptional services, verification via credit and ID cards may be required.",
    },
    {
      para: "We take user privacy seriously at Bobosoho Security. Rest assured, we do not utilize your information for advertising purposes or share it with any third parties. However, to enhance user experience, we may inquire about your interests and age to provide focused advertising. Users have the option to opt out of receiving direct advertising on their private feed. Please note that branded advertising may appear on public feeds, but users have the freedom to interact with it as they see fit.",
    },
    {
      para: "At Bobosoho, we strive to maintain a welcoming and authentic environment where users can freely express their opinions. We uphold the principles of free speech while ensuring compliance with our security policy. Your safety and satisfaction are our top priorities, and we are committed to providing a secure and enjoyable experience for all our users.",
    },
  ];

  return (
    <section className="mx-5 my-20 px-0 md:container md:mx-auto lg:px-64">
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-2xl font-semibold text-blue-500 lg:text-4xl">
          Security of Bobosoho
        </h1>
        <ol className="list-decimal">
          {Security.map((security, i) => (
            <li key={i} className="mb-5">
              {security.para}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Security;
