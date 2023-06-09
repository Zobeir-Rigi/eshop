import { useState, useEffect } from "react";
import quotes from "../Json/quotes.json";
import "../Styles/RandomQuote.css";
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
    <div className="quotes">
      <h2>Apple Wisdom</h2>
      <p>{quote.quote}</p>
      <img src={quote.image} alt="Brace yourself for an incredible quote." />
      <h4>{quote.author}</h4>
    </div>
  );
};

export default RandomQuote;
