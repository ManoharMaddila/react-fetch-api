import { useState, useEffect } from "react";

export default function App() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data (like API)
  useEffect(() => {
    const fetchTopics = () => {
      const topicList = [
        "React Hooks: useState",
        "React Hooks: useEffect",
        "Fetching Data from REST API (Axios / Fetch)",
        "Conditional Rendering (Loading, Error, Data)",
        "Rendering Lists using map()",
        "Error Handling in API Calls",
        "Inline Styling in JSX",
        "Displaying Data in a Table",
        "State Management for Async Operations",
        "Best Practices for Fetching and Displaying Data in React"
      ];
      setTimeout(() => {  // simulate async fetch delay
        setTopics(topicList);
        setLoading(false);
      }, 1000);
    };
    fetchTopics();
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "3rem" }}>Loading topics...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>React Practical Topics</h1>
      <table
        style={{
          margin: "1rem auto",
          borderCollapse: "collapse",
          width: "80%",
          textAlign: "left"
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>#</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Topic</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{index + 1}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
