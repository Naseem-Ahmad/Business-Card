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
    <div

    >
      {count !== null ? (
        <>
          <span role="img" aria-label="earth" style={{ fontSize: "1.8rem" }}>
            🌍
          </span>{" "}
          <strong style={{ color: "#0070f3" }}>
            {count.toLocaleString()}
          </strong>{" "}
          visitors have visited from around the world ✨
        </>
      ) : (
        "🌍 Counting visitors around the world..."
      )}
    </div>
  );
}