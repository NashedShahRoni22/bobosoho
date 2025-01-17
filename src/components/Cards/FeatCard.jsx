export default function FeatCard({ feat }) {
  const { title, description, Icon } = feat;

  return (
    <div className="border-electricViolet/20 hover:bg-electricViolet group col-span-12 cursor-pointer rounded border p-6 transition-colors duration-300 md:col-span-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center rounded-full bg-violet-50 p-3">
          <Icon className="text-electricViolet text-3xl" />
        </div>
        <h4 className="text-2xl font-medium text-neutral-900 transition-colors duration-200 group-hover:text-white">
          {title}
        </h4>
      </div>
      <p className="mt-5 pr-1.5 text-neutral-700 transition-colors duration-200 group-hover:text-white">
        {description}
      </p>
    </div>
  );
}
