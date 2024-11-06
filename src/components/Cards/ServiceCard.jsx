export default function ServiceCard({ service }) {
  const { title, description } = service;

  return (
    <div className="col-span-12 rounded-2xl border bg-white px-4 py-4 md:col-span-6 lg:col-span-4">
      <p className="mb-3 text-lg font-medium text-neutral-900">{title}</p>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}
