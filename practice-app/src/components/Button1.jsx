
function Button1({ text, color = "blue", onClick }) {
  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${colors[color] || colors.blue} text-white px-5 py-2 rounded-lg`}
    >
      {text}
    </button>
  );
}

export default Button1;
