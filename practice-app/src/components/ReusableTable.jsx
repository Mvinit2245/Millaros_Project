
function ReusableTable({ columns, data, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="p-4">
                {column.label}
              </th>
            ))}
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key} className="p-4">
                  {item[column.key]}
                </td>
              ))}

              <td className="p-4">
                <button
                  onClick={() => onDelete(item.id)}
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="p-5 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReusableTable;
