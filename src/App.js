import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

export const App = () => {
  const [input, setInput] = useState();

  return (
    <div className="App">
      <textarea
        className="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <ReactMarkdown source={input} className="markdown" />
    </div>
  );
};

export default App;
