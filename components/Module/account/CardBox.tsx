function CardBox({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:shadow transition">
      <div className="bg-white border border-gray-300 p-3 rounded-full shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}
export default CardBox;
