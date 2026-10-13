function Gaps() {
  return (
    <div className="space-y-4 p-20">
      <div className="m-4 rounded bg-blue-200 p-4">
        Margin and padding
      </div>

      <div className="rounded bg-green-200 p-6">
        More padding
      </div>

      <div className="flex gap-20">
        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          One
        </button>
        <button className="rounded bg-red-600 px-4 py-2 text-white">
          Two
        </button>
      </div>
    </div>
  );
}

export default Gaps;