import React, { useEffect, useState } from "react";
 
function App() {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${apiUrl}/api/message`)
      .then(res => res.json())
      .then(data => setMessage(data.text));
  }, []);
 
  return (
    <div>
      <h1>Mini Cloud App</h1>
      <p>{message}</p>
    </div>
  );
}
 
export default App;