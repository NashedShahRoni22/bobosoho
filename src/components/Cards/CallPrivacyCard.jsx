export default function CallPrivacyCard({ feat }) {
  const { title, description } = feat;

  return (
    <div className="group relative col-span-12 overflow-hidden rounded-3xl bg-[#f7f7f8] p-6 hover:bg-transparent hover:text-white md:col-span-4">
      <p className="text-2xl font-medium">{title}</p>
      <p className="mt-4 text-lg text-gray-600 group-hover:text-white">
        {description}
      </p>
      <div className="absolute -bottom-2 right-0 size-0 rounded-3xl bg-electricViolet transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:-z-10 group-hover:size-full"></div>
    </div>
  );
}
