import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./App.css";

export default function App() {
  const markdown = `<div class="note">

Some *emphasis* and <strong>strong</strong>!
`;

  return (
    <div className="App">
      <ReactMarkdown
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        className="markdown"
      />
    </div>
  );
}
