import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // 🧠 Replace with your actual deployed Next.js API URL
    const apiUrl = "https://business-card-backend-wine.vercel.app/api/visitors";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Visitor API error:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "#555" }}>
      👀 {count !== null ? `${count} visitors` : "Loading..."}
    </div>
  );
}