
function Breadcrumb({ items = [] }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className={
              index === items.length - 1
                ? "font-semibold text-blue-600"
                : "text-gray-500"
            }
          >
            {item.label}
          </span>

          {index !== items.length - 1 && (
            <span className="text-gray-400">/</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
