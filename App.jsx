import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [keyValue, setKeyValue] = useState(Date.now());

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
    });
  }, []);

  const handleClick = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
      setKeyValue(Date.now());
    });
  };

  return (
    <div className="container">
      <div className="refresh">
            <div class="header">Quote of the day</div>
            <button onClick={handleClick} className="new-quote">
            ↻
            </button>
        </div>
        <div key={keyValue} className="quote-container">
          <q className="text">{quote}</q>
          <p className="author">{author}</p>
        </div>
        <div className="tweet">
          <a 
              className="tweet-quote"
              href={"https://twitter.com/intent/tweet?text=" + "Quote of the day:" + '%0a' + '"' + quote + '"' + '%0a' + '- ' + author}
              title="Tweet this quote"
              target="_blank">
              <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
    </div>
  );
}

export default App;