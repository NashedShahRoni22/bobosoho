export default function ServiceCard({ service }) {
  const { title, description, Icon } = service;

  return (
    <div className="col-span-12 rounded-2xl border bg-white px-4 py-4 md:col-span-6 lg:col-span-4">
      <div className="mb-3 flex items-center gap-3.5">
        <Icon className="text-3xl text-electricViolet" />
        <p className="text-lg font-medium text-neutral-900">{title}</p>
      </div>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}
