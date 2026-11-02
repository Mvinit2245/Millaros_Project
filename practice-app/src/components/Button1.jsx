


function Button1({ 
  text, 
  color = "green", 
  onClick ,
  disabled=false
}) {
  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
     
      className={`${colors[color] || colors.blue} text-white px-5 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled = {disabled}
    >
      {text}
     
    </button>
  );
}

export default Button1;
