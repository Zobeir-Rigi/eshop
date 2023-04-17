import { useState, useEffect } from "react";
import quotes from "./quotes.json";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  const pickFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomQuote = pickFromArray(quotes);
      setQuote(randomQuote);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Apple's Quotes</h2>
      <p>{quote.quote}</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default RandomQuote;
