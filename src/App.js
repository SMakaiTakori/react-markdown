import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./App.css";

export default function App() {
  const markdown = `Just a link: https://reactjs.com.`;

  return (
    <div className="App">
      <ReactMarkdown
        remarkPlugins={[gfm]}
        children={markdown}
        className="markdown"
      />
    </div>
  );
}
