//inline style
function Greeting() {
  const h1Style = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    backgroundColor: "green",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <>
      <h1 style={h1Style}>Lagi belajar React JS</h1>
      <button style={buttonStyle}>Click</button>
    </>
  );
}

export default Greeting;
