function AlertBox({ type = "success", children }) {
  const baseStyle = {
    padding: "12px 16px",
    borderRadius: "6px",
    marginBottom: "12px",
    fontWeight: "bold",
    color: "#fff",
  };

  const typeStyles = {
    success: {
      backgroundColor: "#2ecc71",
    },
    warning: {
      backgroundColor: "#f1c40f",
      color: "#000",
    },
    error: {
      backgroundColor: "#e74c3c",
    },
  };

  return (
    <div style={{ ...baseStyle, ...typeStyles[type] }}>
      {children}
    </div>
  );
}

export default AlertBox;
