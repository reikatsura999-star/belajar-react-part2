import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>This is DashBoard</h1>
            <nav style={{ marginTop: "20px" }}>
                <Link to="/products" style={{
                    padding: "10px 20px",
                    backgroundColor: "#646cff",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px"
                }}>
                    Ke Halaman Produk (Query Params)
                </Link>
            </nav>
        </div>
    )
}